from rest_framework import viewsets
from .serializer import TaskSerilizer
from .models import Tasks

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerilizer
    queryset = Tasks.objects.all()