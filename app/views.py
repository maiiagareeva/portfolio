from django.shortcuts import render
# from django.http import HttpResponse

# Create your views here. методы, который будут испол пользователем

def index(request):
	return render(request, 'app/index.html') 

def about(request):
	return render(request, "app/about.html")

def skills(request):
	return render(request, "app/skills.html")

def education(request):
	return render(request, "app/education.html")

def contact(request):
	return render(request, "app/contact.html")

def photo(request):
	return render(request, "app/photo.html")