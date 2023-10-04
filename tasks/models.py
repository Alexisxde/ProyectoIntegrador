from django.db import models

class Tasks(models.Model):
    title = models.CharField(max_length = 50)
    description = models.TextField(blank = True)
    due_date = models.DateField(auto_now_add = True)
    completed = models.BooleanField(default = False)

    def __str__(self):
       return self.title + " - by " + self.user.username