from dataclasses import field;
from pyexpat import model;
from rest_framework import serializers
from .models import Comment;
from .models import MemberCenter;

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class MemberCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberCenter
        field = ['userid', 'name','email', 'membersince']
        depth = 1 

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['location_id', 'text']
        depth = 1
