from django.urls import include, path
from rest_framework import routers
from .views import TaskView

router = routers.DefaultRouter()
router.register(r"tasks", TaskView, 'tasks')

urlpatterns = [
  path('api/', include(router.urls)),
]