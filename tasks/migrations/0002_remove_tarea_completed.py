# Generated by Django 4.2.5 on 2023-09-12 01:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tarea',
            name='completed',
        ),
    ]