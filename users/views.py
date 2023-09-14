from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.db import IntegrityError
from.forms import TasksForm

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

def tasks(request):
    return render(request, 'tasks.html')

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

def new_task(request):
    form = TasksForm(request.POST)
    new_task = form.save(commit=False)
    new_task.user = request.user
    new_task.save()