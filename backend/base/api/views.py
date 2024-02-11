from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import Token
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from .serializers import PermissionSerializer, PermissionCreateSerializer
from django.contrib.auth.models import Permission
from rest_framework.permissions import IsAdminUser


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class CustomTokenObtainPairView(TokenObtainPairView):
    print("hit here")
    serializer_class = CustomTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/token',
        'api/token/refresh',
        'api/permissions',
        'api/permissions/create'
    ]

    return Response(routes)

class PermissionListView(generics.ListAPIView):
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer


@api_view(['POST'])
class PermissionCreateView(generics.GenericAPIView):
    queryset = Permission.objects.all()
    serializer_class = PermissionCreateSerializer
    permission_classes = [IsAdminUser]

