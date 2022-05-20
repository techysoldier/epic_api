from django.apps import AppConfig

from django.contrib import admin
from .models import MemberCenter
from .models import Comment

admin.site.register(MemberCenter)
admin.site.register(Comment)
