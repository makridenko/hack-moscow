from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from django.conf.urls import include, url

from .schema import schema

urlpatterns = [
    path('admin/', admin.site.urls),
]
