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

from users.models import (
    UserInfo,
    UserLessonRate,
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
        fields = [
            'difficulty',
            'lesson__id',
        ]


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

class UnitType(DjangoObjectType):
    class Meta:
        model = Unit

class LessonNode(DjangoObjectType):
    class Meta:
        model = Lesson
        filter_fields = {}
        interfaces = (graphene.relay.Node, )


class TaskNode(DjangoObjectType):
    class Meta:
        model = Task
        filter_fields = {
            'difficulty': ['exact'],
            'lesson__id': ['exact'],
        }
        interfaces = (graphene.relay.Node, )


class AnswerNode(DjangoObjectType):
    class Meta:
        model = Answer
        filter_fields = {}
        interfaces = (graphene.relay.Node, )

''' Own Object Types '''

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

    ai_units = graphene.List(UnitType)

    def resolve_ai_units(self, info):
        user = info.context.user

        user_coff = UserInfo.objects.get(user=user).coff
        units = Unit.objects.all()
        ai_units = []

        for unit in units:
            lessons = Lesson.objects.filter(unit=unit)
            lesson_rating = 0
            for lesson in lessons:
                try:
                    rate = UserLessonRate.objects.get(user=user, lesson=lesson)
                    lesson_rating += rate.lesson_rating
                except: lesson_rating += 10
            if (lesson_rating-user_coff) < 1: ai_units.append(unit)

        return ai_units



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
