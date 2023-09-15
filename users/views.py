from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.db import IntegrityError
from.forms import TasksForm
from .models import Tasks ## gabriela
from django.contrib.auth.decorators import login_required  ##gabriela

def home(request):
    return render(request, 'home.html')

def signup(request):
    if request.method == "GET":
        return render(request,'signup.html', {
            'form': UserCreationForm
        })
    else:
        if request.POST["password1"] == request.POST["password2"]:
            try:
                user = User.objects.create_user(username=request.POST["username"], password=request.POST["password1"])
                user.save()
                login(request, user)
                return redirect("tasks")
            except IntegrityError:
                return render(request,'signup.html', {
                    'form': UserCreationForm,
                    "error": "Usuario ya existe..."
                })
        return render(request,'signup.html', {
                    'form': UserCreationForm,
                    "error": "Password no coinciden..."
                })

##def tasks(request):
##    return render(request, 'tasks.html')

def signout(request):
    logout(request)
    return redirect("home")

def signin(request):
    if request.method == "GET":
        return render(request, 'signin.html', {
            'form': AuthenticationForm
        })
    else:
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("tasks")
        else:
            return render(request, 'signin.html', {
                'form': AuthenticationForm,
                "error": "Usuario o password incorrectos..."
            })

##def new_task(request):
##    form = TasksForm(request.POST)
##    new_task = form.save(commit=False)
##    new_task.user = request.user
##    new_task.save()

@login_required
def tasks(request):
    tasks = Tasks.objects.filter(user=request.user)
    return render(request, 'tasks.html', {'tasks': tasks})

def create_task(request):
    if request.method == 'POST':
        form = TasksForm(request.POST)
        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect('tasks')
    else:
        form = TasksForm()
    return render(request, 'create_task.html', {'form': form})

def edit_task(request, pk):
    task = get_object_or_404(Tasks, pk=pk)
    if request.method == 'POST':
        form = TasksForm(request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect('tasks')
    else:
        form = TasksForm(instance=task)
    return render(request, 'edit_task.html', {'form': form, 'task': task})

def delete_task(request, pk):
    task = get_object_or_404(Tasks, pk=pk)
    if request.method == 'POST':
        task.delete()
        return redirect('tasks')
    return render(request, 'delete_task.html', {'task': task})