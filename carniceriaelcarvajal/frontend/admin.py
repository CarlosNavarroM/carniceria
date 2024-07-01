# admin.py
from django.contrib import admin
from .models import Producto, Usuario, Carrito, DetalleCarrito, Orden, DetalleEnvio, MensajeContacto, Sugerencia

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'precio', 'descripcion', 'imagen_url')
    search_fields = ('nombre',)

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'is_staff', 'is_active')
    search_fields = ('username', 'email')

# Registrar otros modelos si es necesario

admin.site.register(Orden)
admin.site.register(DetalleEnvio)
admin.site.register(MensajeContacto)
admin.site.register(Sugerencia)
