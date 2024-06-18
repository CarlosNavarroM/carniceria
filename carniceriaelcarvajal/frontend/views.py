# frontend/views.py

from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')

def productos(request):
    return render(request, 'frontend/productos.html')

def carrito(request):
    return render(request, 'frontend/carrito.html')

def pago(request):
    return render(request, 'frontend/pago.html')

def contacto(request):
    return render(request, 'frontend/contacto.html')

def sugerencias(request):
    return render(request, 'frontend/sugerencias.html')

def signup(request):
    return render(request, 'frontend/signup.html')

def login(request):
    return render(request, 'frontend/login.html')
