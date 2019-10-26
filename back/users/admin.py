from django.contrib import admin

from .models import (
    UserInfo,
    UserLessonRate,
    UserTask,
)

admin.site.register(UserInfo)
admin.site.register(UserLessonRate)
admin.site.register(UserTask)
