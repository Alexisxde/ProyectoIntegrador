from django.db import models

class tarea(models.Model):
    titulo=models.CharField(max_length=20)
    descripcion=models.CharField(max_length=50)

    def __str__(self):
        return self.titulo, self.descripcion

# Create your models here.
