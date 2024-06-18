# views.py
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.core.mail import send_mail
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login
from .models import Producto
from django.shortcuts import render, redirect
from .models import Sugerencia
from django.contrib.auth import login
from .forms import RegistroForm
from .models import MensajeContacto
from django.contrib.auth import logout as auth_logout

def signup(request):
    if request.method == 'POST':
        form = RegistroForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Cuenta creada exitosamente.')
            
    else:
        form = RegistroForm()
    return render(request, 'frontend/signup.html', {'form': form})


def sugerencia_view(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        correo = request.POST.get('correo')
        telefono = request.POST.get('telefono')
        asunto = request.POST.get('asunto')
        tipo_sugerencia = request.POST.get('suggestionType')
        sugerencia_text = request.POST.get('sugerencia')

        if tipo_sugerencia == 'contacto':
            nueva_sugerencia = MensajeContacto(
                usuario=request.user if request.user.is_authenticated else None,
                nombre=nombre,
                correo=correo,
                telefono=telefono,
                asunto=asunto,
                mensaje=sugerencia_text,
            )
        else:
            nueva_sugerencia = Sugerencia(
                usuario=request.user if request.user.is_authenticated else None,
                tipo_sugerencia=tipo_sugerencia,
                sugerencia=sugerencia_text,
            )
        
        nueva_sugerencia.save()
        messages.success(request, '¡Gracias por contactarte con nosotros!')

        return redirect('sugerencias')

    return render(request, 'frontend/sugerencias.html')


# Vistas para las páginas principales
def index(request):
    return render(request, 'frontend/index.html')

def productos(request):
    productos = Producto.objects.all()
    return render(request, 'frontend/productos.html', {'productos': productos})

def contacto(request):
    return render(request, 'frontend/contacto.html')


def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            if user.is_superuser:
                return redirect('/admin/')
            else:
                return redirect('index')
        else:
            messages.error(request, 'Nombre de usuario o contraseña incorrectos.')
    return render(request, 'frontend/login.html')


def logout_view(request):
    auth_logout(request)
    return redirect('index')


def carrito(request):
    return render(request, 'frontend/carrito.html')

def pago(request):
    return render(request, 'frontend/pago.html')



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
