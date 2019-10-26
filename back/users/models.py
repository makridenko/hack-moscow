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

    experience = models.FloatField(
        default=0,
    )

    coff = models.FloatField(
        default=40,
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

    user_rating = models.FloatField(
        default=0,
    )

    lesson_rating = models.FloatField(
        default=0,
    )


class UserTask(models.Model):
    task = models.OneToOneField(
        Task,
        on_delete=models.CASCADE,
        null=False,
        unique=True,
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
    )

    is_done = models.BooleanField(
        default=False,
    )
