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
    UserTaskAnswer,
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
        fields = ['username']


class UserInfoFilter(django_filters.FilterSet):
    class Meta:
        model = UserInfo
        fields = []


class UserLessonRateFilter(django_filters.FilterSet):
    class Meta:
        model = UserLessonRate
        fields = []


class UserTaskAnswerFilter(django_filters.FilterSet):
    class Meta:
        model = UserTaskAnswer
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


class UserTaskAnswerNode(DjangoObjectType):
    class Meta:
        model = UserTaskAnswer
        filter_fields = {}
        interfaces = (graphene.relay.Node, )


''' Mutations '''

class CreateUserTaskAnswer(relay.ClientIDMutation):
    rate = graphene.Field(UserLessonRateNode)

    class Input:
        task_id = graphene.ID()
        answer_id = graphene.ID()

    def mutate_and_get_payload(root, info, **input):
        user = info.context.user
        task_id = input.get('task_id')
        answer_id = input.get('answer_id')

        if user.is_anonymous:
            raise Exception('Not logged in!')

        _, pk = graphql_relay.from_global_id(task_id)
        current_task = Task.objects.get(pk=pk)

        if not current_task:
            raise Exception('Invalid Task')

        _, pk = graphql_relay.from_global_id(answer_id)
        current_answer = Answer.objects.get(pk=pk)

        if not current_answer:
            raise Exception('Invalid Answer')

        if current_answer.is_true: user_answer = 1
        else: user_answer = 0

        print(f'Пользователь ответил: {user_answer}')

        total_tasks = len(list(Task.objects.all()))
        user_tasks = len(list(UserTaskAnswer.objects.all()))

        print(f'Всего заданий в этом разделе: {total_tasks}')
        print(f'Пользователь выполнил: {user_tasks}')

        if user_tasks == 0: user_coff_for_task = 1
        else: user_coff_for_task = 1 - (user_tasks/total_tasks)

        user_rating = UserInfo.objects.get(user=user).rating
        lesson_rating = Lesson.objects.get(task=current_task).rating

        print(f'Рейтинг пользователя на данном уроке: {user_rating}')
        print(f'Рейтинг урока: {lesson_rating}')

        prediction = 1/(1+10*(lesson_rating-user_rating)/400)

        print(f'Предсказание: {prediction}')

        new_user_rating = user_rating + user_coff_for_task*(user_answer+prediction)

        print(f'Обновленный рейтинг пользователя: {new_user_rating}')

        if new_user_rating < 0: new_user_rating = 0
        if new_user_rating > 1: new_user_rating = 1

        user_lesson_rate = UserLessonRate.objects.get(
            user=user,
            lesson=Lesson.objects.get(task=current_task),
        )
        user_lesson_rate.rating = new_user_rating
        user_lesson_rate.save()

        user_task_answer = UserTaskAnswer()
        user_task_answer.user = user
        user_task_answer.lesson = Lesson.objects.get(task=current_task)
        user_task_answer.answer = user_answer
        user_task_answer.save()

        all_of_answers = UserLessonRate.objects.filter(
            lesson=Lesson.objects.get(task=current_task),
        )

        sum = 0
        for i in range(len(all_of_answers)):
            sum += all_of_answers[i].rating

        new_lesson_rating = sum/len(all_of_answers)

        print(f'Новый рейтинг урока: {new_lesson_rating}')

        lesson = Lesson.objects.get(task=current_task)
        lesson.rating = new_lesson_rating
        lesson.save()

        user_rates = UserLessonRate.objects.filter(user=user)


        sum = 0
        for i in range(len(user_rates)):
            sum += user_rates[i].rating

        user_rate = sum/len(user_rates)


        print(f'Общий рейтинг пользователя: {user_rate}')

        user_info = UserInfo.objects.get(user=user)
        user_info.rating = user_rate
        user_info.save()

        return CreateUserTaskAnswer(rate=user_lesson_rate)


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

    user_task_answer = graphene.relay.Node.Field(UserTaskAnswerNode)
    user_task_answers = DjangoFilterConnectionField(
        UserTaskAnswerNode,
        filterset_class = UserTaskAnswerFilter,
    )


class Mutation(graphene.ObjectType):
    create_user_task_answer = CreateUserTaskAnswer.Field()
