from dataclasses import field;
from pyexpat import model;
from rest_framework import serializers
from .models import Business, Comment;
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
        fields = ['user','location_id', 'text']
        depth = 1


class BusinessSerializer(serializers.ModelSerializer):
    class Meta: 
        name = Business
        fields = ['name', 'owner', 'address', 'latitude','longitude']