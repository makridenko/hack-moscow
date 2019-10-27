import graphene
import django_filters
import graphql_relay
from graphene import relay
from django.contrib.auth import get_user_model

from django.contrib.auth import authenticate
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType

from .models import (
    UserInfo,
    UserLessonRate,
    UserTask,
)

from subjects.models import (
    Answer,
    Task,
    Lesson,
)


""" GraphQL filters """

class UserFilter(django_filters.FilterSet):
    class Meta:
        model = get_user_model()
        fields = [
            'username',
        ]


class UserInfoFilter(django_filters.FilterSet):
    class Meta:
        model = UserInfo
        fields = [
            'user__username',
        ]


class UserLessonRateFilter(django_filters.FilterSet):
    class Meta:
        model = UserLessonRate
        fields = []


class UserTaskFilter(django_filters.FilterSet):
    class Meta:
        model = UserTask
        fields = []


""" GraphQL/Relay Nodes """

class UserNode(DjangoObjectType):
    class Meta:
        model = get_user_model()
        filter_fields = {
            'username': ['exact'],
        }
        interfaces = (graphene.relay.Node, )


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class UserInfoNode(DjangoObjectType):
    class Meta:
        model = UserInfo
        filter_fields = {
            'user__username': ['exact'],
        }
        interfaces = (graphene.relay.Node, )


class UserLessonRateNode(DjangoObjectType):
    class Meta:
        model = UserLessonRate
        filter_fields = {}
        interfaces = (graphene.relay.Node, )


class UserTaskNode(DjangoObjectType):
    class Meta:
        model = UserTask
        filter_fields = {}
        interfaces = (graphene.relay.Node, )


''' Mutations '''

class CreateUser(relay.ClientIDMutation):
    user = graphene.Field(UserNode)

    class Input:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)

    def mutate_and_get_payload(root, info, **input):
        user = get_user_model()(
            username = input.get('username'),
            email = input.get('email')
        )

        user.set_password(input.get('password'))
        user.save()

        user_info = UserInfo()
        user_info.first_name = input.get('first_name')
        user_info.last_name = input.get('last_name')
        user_info.user = user
        user_info.save()

        all_lessons = Lesson.objects.all()

        for lesson in all_lessons:
            UserLessonRate(
                user=user,
                lesson=lesson,
            ).save()

        return CreateUser(user=user)


class UserLogIn(graphene.Mutation):
    user = graphene.Field(UserNode)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    def mutate(self, info, username, password):
        user = authenticate(
            username=username,
            password=password,
        )

        if not user:
            raise Exception('Invalid username or password')

        return UserLogIn(user=user)


class FirstScenarioMutation(graphene.ClientIDMutation):
    user = graphene.Field(UserNode)

    class Input:
        lesson_id = graphene.ID()
        tasks = graphene.List(graphene.Boolean)

    def mutate_and_get_payload(root, info, **input):
        user = info.context.user
        id = input.get('lesson_id')
        tasks = input.get('tasks')

        if user.is_anonymous:
            raise Exception('Not logged in!')

        _, pk = graphql_relay.from_global_id(id)
        lesson = Lesson.objects.filter(pk=pk)[0]
        user_info = UserInfo.objects.get(user=user)
        user_lesson_rate = UserLessonRate.objects.get(
            user=user,
            lesson=lesson,
        )


        for task in tasks:
            if task:
                user_info.coff -= 1/40
                user_lesson_rate.user_rating += 20
                user_lesson_rate.lesson_rating -= 20
            else:
                user_info.coff += 1/40
                user_lesson_rate.user_rating -= 20
                user_lesson_rate.lesson_rating += 20

        user_info.experience += 20
        user_info.save()
        user_lesson_rate.save()

        tasks_for_lesson = Task.objects.filter(
            lesson=lesson
        )

        for task in tasks_for_lesson:
            t_ = UserTask.objects.get(
                user=user,
                task=task,
            )
            t_.is_done = True
            t_.save()

        return FirstScenarioMutation(user=user)


class TestMutation(graphene.ClientIDMutation):
    user = graphene.Field(UserNode)

    class Input:
        lesson_id = graphene.ID()
        tasks = graphene.List(graphene.Boolean)

    def mutate_and_get_payload(root, info, **input):
        user = info.context.user
        id = input.get('lesson_id')
        tasks = input.get('tasks')

        if user.is_anonymous:
            raise Exception('Not logged in')

        _, pk = graphql_relay.from_global_id(id)
        lesson = Lesson.objects.filter(pk=pk)[0]
        user_info = UserInfo.objects.get(user=user)
        user_lesson_rate = UserLessonRate.objects.get(
            user=user,
            lesson=lesson,
        )

        tasks_diff = Task.objects.filter(lesson=lesson)[0].difficulty

        for task in tasks:
            if task:
                user_info.coff -= 1/tasks_diff
                user_lesson_rate.user_rating += 20
                user_lesson_rate.lesson_rating -= 20
                user_info.experience += (50-tasks_diff)/10
            else:
                user_info.coff += 1/tasks_diff
                user_lesson_rate.user_rating -= 20
                user_lesson_rate.lesson_rating += 20

        user_info.save()
        user_lesson_rate.save()

        return TestMutation(user=user)


class Query(graphene.ObjectType):
    user = DjangoFilterConnectionField(
        UserNode,
        filterset_class = UserFilter,
    )
    users = graphene.List(UserType)

    def resolve_users(self, info):
        return get_user_model().objects.all()

    user_info = graphene.relay.Node.Field(UserInfoNode)
    user_infos = DjangoFilterConnectionField(
        UserInfoNode,
        filterset_class = UserInfoFilter,
    )

    user_lesson_rate = graphene.relay.Node.Field(UserLessonRateNode)
    user_lesson_rates = DjangoFilterConnectionField(
        UserLessonRateNode,
        filterset_class = UserLessonRateFilter,
    )

    user_task = graphene.relay.Node.Field(UserTaskNode)
    user_tasks = DjangoFilterConnectionField(
        UserTaskNode,
        filterset_class = UserTaskFilter,
    )


class Mutation(graphene.ObjectType):
    # create_user_task_answer = CreateUserTaskAnswer.Field()
    create_user = CreateUser.Field()
    login = UserLogIn.Field()
    first_scenario = FirstScenarioMutation.Field()
    test_mutation = TestMutation.Field()
