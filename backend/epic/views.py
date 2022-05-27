from xml.etree.ElementTree import Comment
from django.shortcuts import render, get_object_or_404
from .serializers import CommentSerializer
from .serializers import MemberCenterSerializer
from rest_framework import status;
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .models import MemberCenter



@api_view(['GET', 'POST'])
def get_membercenter(request):
    if request.method == 'GET':
        products = MemberCenter.objects.all()
        serializer = MemberCenterSerializer(products,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = MemberCenterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET','POST'])
@permission_classes([AllowAny])
def get_comments(request):
    if request.method == 'GET':
        comment = Comment.objects.all()
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.id)
            return Comment(serializer.data, status=status.HTTP_201_CREATED)
        return Comment(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
