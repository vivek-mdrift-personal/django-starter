# permissions.py

from rest_framework import permissions

class CustomPermission(permissions.BasePermission):
    """
    Custom permission to only allow access to authenticated users.
    """
    def has_permission(self, request, view):
        # Write your custom permission logic here
        # For example, allow access only if the user is an admin
        return request.user and request.user.is_staff
