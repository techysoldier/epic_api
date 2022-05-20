from pyexpat import model
from rest_framework import serializers
from .models import Comment
from .models import Reply

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['user', 'location_id', 'text']
        depth = 1
