# create_custom_user.py
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
import django
django.setup()

from base.models import CustomUser

def create_custom_user(username, email, password):
    user = CustomUser.objects.create_user(username=username, email=email, password=password)
    # Add custom fields if needed
    user.save()

if __name__ == "__main__":
    username = input("Enter username: ")
    email = input("Enter email: ")
    password = input("Enter password: ")
    create_custom_user(username, email, password)
