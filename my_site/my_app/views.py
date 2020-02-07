from django.shortcuts import render


# Create your views here.

app_name = 'my_app'

def index(request):
    return render(request, "ninjaquiz.html")

def my_website(request):
    return render(request, "my_website.html")

def flex_box(request):
    return render(request, "flex_box.html")

def menu_flexbox(request):
    return render(request, "menu_flexbox.html")

def css_grid(request):
    return render(request, "css_grid.html")

def javascript(request):
    return render(request, "home.html")

def ninjaquiz(request):
    return render(request, "ninjaquiz.html")

def todolist(request):
    return render(request, "todolist.html")