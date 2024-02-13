from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import Token
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from .serializers import PermissionSerializer, PermissionCreateSerializer, TestItemSerializer, CustomUserSerializer
from django.contrib.auth.models import Permission
from rest_framework.permissions import IsAdminUser
from rest_framework import status
from base.models import TestItem, CustomUser

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class CustomTokenObtainPairView(TokenObtainPairView):
    print("hit here")
    serializer_class = CustomTokenObtainPairSerializer


class PermissionListView(generics.ListAPIView):
    queryset = Permission.objects.filter(content_type__app_label='base')
    
    serializer_class = PermissionSerializer


class PermissionCreateView(generics.GenericAPIView):
    queryset = Permission.objects.all()
    # permission_classes = [IsAdminUser]
    def post(self, request):
        serializer = PermissionCreateSerializer(data=request.data)
        if serializer.is_valid() is False:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        permissionItem = serializer.validated_data
        print(permissionItem)
        if Permission.objects.filter(name=permissionItem.get('name')).exists():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        if serializer.is_valid():
            serializer.save()
            return Response(permissionItem, status=status.HTTP_201_CREATED)

class TestItemListView(generics.ListCreateAPIView):
    serializer_class = TestItemSerializer

    def get_queryset(self):
        queryset = TestItem.objects.all()
        queryString = self.request.query_params.get('searchString')
        if queryString is not None:
            queryset = queryset.filter(itemName__icontains=queryString)
        return queryset

class TestItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TestItemSerializer
    queryset = TestItem.objects.all()


class CustomUserListView(generics.ListCreateAPIView):
    serializer_class = CustomUserSerializer

    def get_queryset(self):
        queryset = CustomUser.objects.all()
        queryString = self.request.query_params.get('nameSearchString')
        if queryString is not None:
            queryset = queryset.filter(full_name__icontains=queryString)
        return queryset

class CustomUserDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()