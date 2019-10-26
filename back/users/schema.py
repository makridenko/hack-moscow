import graphene
import django_filters
import graphql_relay
from graphene import relay
from django.contrib.auth import get_user_model

from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType

from .models import (
    UserInfo,
    UserLessonRate,
    UserTask,
)

'''
from subjects.models import (
    Answer,
    Task,
    Lesson,
)
'''


""" GraphQL filters """

class UserFilter(django_filters.FilterSet):
    class Meta:
        model = get_user_model()
        fields = ['username']


class UserInfoFilter(django_filters.FilterSet):
    class Meta:
        model = UserInfo
        fields = []


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


class UserInfoNode(DjangoObjectType):
    class Meta:
        model = UserInfo
        filter_fields = {}
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


class Query(graphene.ObjectType):
    user = graphene.relay.Node.Field(UserNode)
    users = DjangoFilterConnectionField(
        UserNode,
        filterset_class = UserFilter,
    )

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
