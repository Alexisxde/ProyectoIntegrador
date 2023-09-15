from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse  ## gabriela

class Tasks(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    due_date = models.DateField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE) # Relacion de tablas y si se elimina el usuario se elimina sus tareas

    ##def __str__(self):
    ##    return self.title + " - by " + self.user.username
    
    def get_absolute_url(self):  ##gabriela
        return reverse('tasks')  ##gabriela