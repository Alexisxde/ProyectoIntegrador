# Generated by Django 4.2.5 on 2023-09-12 15:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0007_rename_nombre_apellido_pag_registro_nombre_apellido_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Pag_Registro',
        ),
    ]
