from django.urls import path, include
from django.contrib import admin
from . import views

# отслеживание url адресов
urlpatterns = [
	path('', views.index, name='home'),
	path('about/', views.about, name='about'),
	path('skills/', views.skills, name='skills'),
	path('education/', views.education, name='education'),
	path('contact/', views.contact, name='contact'),
	path('photo/', views.photo, name='photo')
	
]