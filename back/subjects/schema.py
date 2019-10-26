import graphene
import django_filters
from graphene import relay

from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType

from .models import (
    Subject,
    Unit,
    Lesson,
    Task,
    Answer,
)


""" GraphQL filters """

class SubjectFilter(django_filters.FilterSet):
    class Meta:
        model = Subject
        fields = []


class UnitFilter(django_filters.FilterSet):
    class Meta:
        model = Unit
        fields = []


class LessonFilter(django_filters.FilterSet):
    class Meta:
        model = Lesson
        fields = []


class TaskFilter(django_filters.FilterSet):
    class Meta:
        model = Task
        fields = []


class AnswerFilter(django_filters.FilterSet):
    class Meta:
        model = Answer
        fields = []


""" GraphQL/Relay Nodes """

class SubjectNode(DjangoObjectType):
    class Meta:
        model = Subject
        filter_fields = {}
        interfaces = (graphene.relay.Node, )


class UnitNode(DjangoObjectType):
    class Meta:
        model = Unit
        filter_fields = {}
        interfaces = (graphene.relay.Node, )


class LessonNode(DjangoObjectType):
    class Meta:
        model = Lesson
        filter_fields = {}
        interfaces = (graphene.relay.Node, )


class TaskNode(DjangoObjectType):
    class Meta:
        model = Task
        filter_fields = {}
        interfaces = (graphene.relay.Node, )


class AnswerNode(DjangoObjectType):
    class Meta:
        model = Answer
        filter_fields = {}
        interfaces = (graphene.relay.Node, )


class Query(graphene.ObjectType):
    subject = graphene.relay.Node.Field(SubjectNode)
    subjects = DjangoFilterConnectionField(
        SubjectNode,
        filterset_class = SubjectFilter,
    )

    unit = graphene.relay.Node.Field(UnitNode)
    units = DjangoFilterConnectionField(
        UnitNode,
        filterset_class = UnitFilter,
    )

    lesson = graphene.relay.Node.Field(LessonNode)
    lessons = DjangoFilterConnectionField(
        LessonNode,
        filterset_class = LessonFilter,
    )

    task = graphene.relay.Node.Field(TaskNode)
    tasks = DjangoFilterConnectionField(
        TaskNode,
        filterset_class = TaskFilter,
    )

    answer = graphene.relay.Node.Field(AnswerNode)
    answers = DjangoFilterConnectionField(
        AnswerNode,
        filterset_class = AnswerFilter,
    )
