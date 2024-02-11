
from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('base.api.urls')),
    path('api/schema', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/docs', SpectacularSwaggerView.as_view(url_name='schema')),
]
