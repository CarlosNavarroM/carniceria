from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='usuario_set',  
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_query_name='usuario',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='usuario_set',  
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='usuario',
    )

    # Campos adicionales para el usuario si es necesario
    pass

class Producto(models.Model):
    nombre = models.CharField(max_length=255)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.TextField()
    imagen_url = models.URLField()

    def __str__(self):
        return self.nombre

class Carrito(models.Model):
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=50)

class DetalleCarrito(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
    precio_subtotal = models.DecimalField(max_digits=10, decimal_places=2)

class Orden(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    fecha_orden = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    estado_orden = models.CharField(max_length=50)

class DetalleEnvio(models.Model):
    orden = models.ForeignKey(Orden, on_delete=models.CASCADE)
    direccion = models.CharField(max_length=255)
    region = models.CharField(max_length=100)
    comuna = models.CharField(max_length=100)
    ubicacion_gps = models.CharField(max_length=255)

class MensajeContacto(models.Model):
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=255)
    correo = models.EmailField()
    telefono = models.CharField(max_length=20)
    asunto = models.CharField(max_length=255)
    mensaje = models.TextField()
    fecha_mensaje = models.DateTimeField(auto_now_add=True)

class Sugerencia(models.Model):
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)
    tipo_sugerencia = models.CharField(max_length=255)
    sugerencia = models.TextField()
    fecha_sugerencia = models.DateTimeField(auto_now_add=True)
