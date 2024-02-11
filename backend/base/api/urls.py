from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import CustomTokenObtainPairView, PermissionListView

urlpatterns = [
    path('',views.getRoutes),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('permissions/', PermissionListView.as_view(), name='permission_list')

]