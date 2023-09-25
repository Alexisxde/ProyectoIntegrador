from django.urls import include, path
from rest_framework import routers
from .views import TaskView, UserView

router = routers.DefaultRouter()
router.register(r"tasks", TaskView, 'tasks')
router.register(r"users", UserView, 'users')

urlpatterns = [
  path('', include(router.urls)),
]