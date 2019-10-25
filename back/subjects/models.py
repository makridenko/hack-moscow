from django.db import models

class Subject(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
    )

    def __str__(self):
        return f'{self.title}'


class Lesson(models.Model):
    title = models.CharField(
        max_length=100,
        null=False,
    )

    subject = models.ForeignKey(
        Subject,
        on_delete=models.CASCADE,
        null=False,
    )

    def __str__(self):
        return f'{self.subject.title}/{self.title}'


class Task(models.Model):
    description = models.TextField(
        null=False,
    )

    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        null=False,
    )

    def __str__(self):
        return f'{self.description[:25]}...'
