from django.db import models
from django.conf import settings

from subjects.models import (
    Lesson,
    Task,
)


class UserInfo(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
    )

    first_name = models.CharField(
        max_length=100,
        null=False,
    )

    last_name = models.CharField(
        max_length=100,
        null=False,
    )

    rating = models.IntegerField(
        default=0,
    )

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class UserLessonRate(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
    )

    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        null=False,
    )

    rating = models.IntegerField(
        default=0,
    )


class UserTaskAnswer(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
    )

    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        null=False,
    )

    answer = models.BooleanField(
        default = False,
    )
