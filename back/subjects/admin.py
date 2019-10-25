from django.contrib import admin

from .models import (
    Subject,
    Lesson,
    Task,
)

admin.site.register(Subject)
admin.site.register(Lesson)
admin.site.register(Task)
