from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# Register your models here.
from .models import TestItem, CustomUser

admin.site.register(TestItem)

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    pass

admin.site.register(CustomUser,CustomUserAdmin)

