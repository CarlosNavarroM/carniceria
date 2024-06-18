# frontend/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('productos/', views.productos, name='productos'),
    path('contacto/', views.contacto, name='contacto'),
    path('sugerencias/', views.sugerencias, name='sugerencias'),
    path('login/', views.login_view, name='login'),  # Cambiado de login a login_view
    path('carrito/', views.carrito, name='carrito'),
    path('pago/', views.pago, name='pago'),
    path('signup/', views.signup, name='signup'),
    path('productos/lista/', views.lista_productos, name='lista_productos'),
    path('productos/nuevo/', views.crear_producto, name='crear_producto'),
    path('productos/<int:pk>/editar/', views.actualizar_producto, name='actualizar_producto'),
    path('productos/<int:pk>/borrar/', views.borrar_producto, name='borrar_producto'),
    path('navbar/', views.navbar, name='navbar'),
    path('password_reset/', views.password_reset_request, name='password_reset'),
]
