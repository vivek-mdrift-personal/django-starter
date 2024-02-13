from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import CustomUserManager

class CustomUser(AbstractUser):
    # Add custom fields if needed
    full_name = models.CharField(max_length=100, blank=True)
    isAttendee = models.BooleanField(default=True)
    objects = CustomUserManager()

    def __str__(self):
        return self.email




class TestItem(models.Model):
    itemName = models.CharField(max_length=100, unique=True)
    date_added = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.itemName
    
