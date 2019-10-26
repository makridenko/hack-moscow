from django.contrib import admin

from .models import (
    UserInfo,
    UserLessonRate,
    UserTaskAnswer,
)

admin.site.register(UserInfo)
admin.site.register(UserLessonRate)
admin.site.register(UserTaskAnswer)
