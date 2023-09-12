from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

    def __str__(self):
      return self.username
    
class Usuario(models.Model):
    nombre_Apellido=models.CharField(max_length=20)
    usuario_email = models.EmailField()
    Contraseña = models.CharField(max_length=15 )
    Confirmar_contraseña=models.CharField(max_length=15)
       
    def __str__(self):
        return self.nombre_Apellido+ ", "+self.usuario_email  