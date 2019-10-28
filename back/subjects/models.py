from django.db import models


class Subject(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
    )

    def __str__(self):
        return f'{self.title}'


class Unit(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
    )

    theory = models.TextField(
        null=False,
    )

    description = models.TextField(
        null=False,
    )

    subject = models.ForeignKey(
        Subject,
        on_delete=models.CASCADE,
        null=False,
    )

    def __str__(self):
        return f'{self.title}'


class Lesson(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
    )

    unit = models.ForeignKey(
        Unit,
        on_delete=models.CASCADE,
        null=False,
    )

    description = models.TextField(
        null=False,
    )

    parent = models.ForeignKey(
        "self",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="Lesson_parent",
    )

    def __str__(self):
        return f'{self.unit.title}/{self.title}'


class Task(models.Model):
    description = models.TextField(
        null=False,
    )

    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        null=False,
    )

    difficulty = models.FloatField(
        default=40,
    )

    def __str__(self):
        return f'{self.description[:25]}...'


class Answer(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
    )

    is_true = models.BooleanField(
        default=False,
    )

    task = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
        null=False,
    )

    def __str__(self):
        return f'{self.task}/{self.title}'
