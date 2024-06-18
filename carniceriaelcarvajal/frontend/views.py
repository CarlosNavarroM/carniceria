# views.py
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.core.mail import send_mail
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.forms import UserCreationForm
from .models import Producto
from .forms import ProductoForm
from django.shortcuts import render, redirect
from .models import Sugerencia


def sugerencia_view(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        correo = request.POST.get('correo')
        telefono = request.POST.get('telefono')
        asunto = request.POST.get('asunto')
        tipo_sugerencia = request.POST.get('suggestionType')
        sugerencia_text = request.POST.get('sugerencia')

        nueva_sugerencia = Sugerencia(
            usuario=request.user if request.user.is_authenticated else None,
            tipo_sugerencia=tipo_sugerencia,
            sugerencia=sugerencia_text,
        )
        nueva_sugerencia.save()
        messages.success(request, '¡Gracias por tu sugerencia!')

        return redirect('sugerencias')

    return render(request, 'frontend/sugerencias.html')

# Vista para listar productos
def lista_productos(request):
    productos = Producto.objects.all()
    return render(request, 'productos/lista_productos.html', {'productos': productos})

# Vista para crear un nuevo producto
def crear_producto(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_productos')
    else:
        form = ProductoForm()
    return render(request, 'productos/crear_producto.html', {'form': form})

# Vista para actualizar un producto existente
def actualizar_producto(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == 'POST':
        form = ProductoForm(request.POST, instance=producto)
        if form.is_valid():
            form.save()
            return redirect('lista_productos')
    else:
        form = ProductoForm(instance=producto)
    return render(request, 'productos/crear_producto.html', {'form': form})

# Vista para borrar un producto existente
def borrar_producto(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == 'POST':
        producto.delete()
        return redirect('lista_productos')
    return render(request, 'productos/borrar_producto.html', {'producto': producto})

# Vistas para las páginas principales
def index(request):
    return render(request, 'frontend/index.html')

def productos(request):
    productos = Producto.objects.all()
    return render(request, 'frontend/productos.html', {'productos': productos})

def contacto(request):
    return render(request, 'frontend/contacto.html')


# Vista para el inicio de sesión
def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return redirect('index')
        else:
            messages.error(request, 'Nombre de usuario o contraseña incorrectos.')
    return render(request, 'frontend/login.html')

def carrito(request):
    return render(request, 'frontend/carrito.html')

def pago(request):
    return render(request, 'frontend/pago.html')

# Vista para el registro de nuevos usuarios
def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Cuenta creada exitosamente.')
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'frontend/signup.html', {'form': form})

def navbar(request):
    return render(request, 'frontend/navbar.html')

# Vista para la solicitud de restablecimiento de contraseña
def password_reset_request(request):
    if request.method == "POST":
        email = request.POST.get('email')
        associated_users = User.objects.filter(email=email)
        if associated_users.exists():
            for user in associated_users:
                # Enviar correo de recuperación (simplificado)
                subject = "Solicitud de cambio de contraseña"
                message = f"Visita el siguiente enlace para cambiar tu contraseña: {request.build_absolute_uri(reverse('password_reset_confirm'))}?uid={user.id}"
                send_mail(subject, message, 'admin@carniceria.com', [user.email])
                messages.success(request, 'Se ha enviado un enlace de recuperación a tu correo electrónico.')
            return redirect('login')
        else:
            messages.error(request, 'No se encontró una cuenta con ese correo electrónico.')
    return render(request, "frontend/password_reset.html")
