# create_custom_permissions.py
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
import django
django.setup()

from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from base.models import CustomUser

def create_custom_permissions(user, permissions):
    content_type = ContentType.objects.get_for_model(CustomUser)
    for codename, name in permissions:
        permission = Permission.objects.create(
            codename=codename,
            name=name,
            content_type=content_type
        )
        user.user_permissions.add(permission)

if __name__ == "__main__":
    user_id = input("Enter custom user ID: ")
    permissions = [
        ('test_permission_three', 'Can do something else'),
        ('test_permission_four', 'Can do another thing else'),
        # Add more custom permissions as needed
    ]
    user = CustomUser.objects.get(pk=user_id)
    create_custom_permissions(user, permissions)
