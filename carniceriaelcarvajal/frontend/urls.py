# frontend/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('productos/', views.productos, name='productos'),
    path('carrito/', views.carrito, name='carrito'),
    path('pago/', views.pago, name='pago'),
    path('contacto/', views.contacto, name='contacto'),
    path('sugerencias/', views.sugerencias, name='sugerencias'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
]
