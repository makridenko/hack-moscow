from django.contrib import admin

from .models import (
    Subject,
    Lesson,
    Task,
    Answer,
)

admin.site.register(Subject)
admin.site.register(Lesson)
admin.site.register(Task)
admin.site.register(Answer)
