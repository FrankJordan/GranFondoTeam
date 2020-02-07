from django.contrib import admin
from django.urls import path

"""my_site URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('my_website', views.my_website, name="my_website"),
    path('flex_box', views.flex_box, name="flex_box"),
    path('menu_flexbox', views.menu_flexbox, name="menu_flexbox"),
    path('css_grid', views.css_grid, name="css_grid"),
    path('javascript', views.javascript, name="javascript"),
    path('ninjaquiz', views.ninjaquiz, name="ninjaquiz"),
    path('todolist', views.todolist, name="todolist"),


]
