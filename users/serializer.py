from rest_framework import serializers
from .models import Tasks
from django.contrib.auth.models import User

class TaskSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = "__all__"

class UserSerilizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "email", "password", "date_joined", "is_superuser")
        # fields = "__all__"