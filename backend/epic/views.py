from django.shortcuts import render, get_object_or_404
from .serializers import BusinessSerializer, CommentSerializer
from .serializers import MemberCenterSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import  Comment
from .models import MemberCenter
from .models import Business




@api_view(['GET', 'POST'])
def get_membercenter(request):
    if request.method == 'GET':
        products = MemberCenter.objects.all()
        serializer = MemberCenterSerializer(MemberCenter,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = MemberCenterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def get_comments(request):
    if request.method == 'GET':
        comment = Comment.objects.all()
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def user_comments(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        
 

@api_view(['GET'])
@permission_classes([AllowAny])
def buisness_list(request):
    if request.method == 'GET':
        buisness = Business.objects.all()
        serializer = BusinessSerializer(buisness, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def new_business(request):
    if request.method == 'POST':
        serializer = BusinessSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)