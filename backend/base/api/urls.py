from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import CustomTokenObtainPairView, PermissionListView, PermissionCreateView, TestItemListView, TestItemDetailView, CustomUserListView, CustomUserDetailView

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('permissions/', PermissionListView.as_view(), name='permission_list'),
    path('permissions/create', PermissionCreateView.as_view(), name='permission_create'),
    path('testitem/', TestItemListView.as_view(), name='test_item_bulk_list_create' ),
    path('testitem/<int:pk>', TestItemDetailView.as_view(), name='test_item_detail_view'),
    path('users/', CustomUserListView.as_view(), name='custom_user_list_create' ),
    path('users/<int:pk>', CustomUserDetailView.as_view(), name='custom_user_detail'),    
]