import graphene
import django_filters
from graphene import relay
from django.contrib.auth import get_user_model

from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType

from .models import (
    UserInfo,
    UserLessonRate,
    UserTaskAnswer,
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
