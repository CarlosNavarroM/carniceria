# Carnicería El Carvajal

## Descripción General
Carnicería El Carvajal es una tienda en línea diseñada para ofrecer una experiencia de usuario intuitiva y eficiente en la compra de productos cárnicos. Los usuarios pueden explorar productos, agregar artículos a un carrito de compras y proceder con el pago de manera fácil y segura. El sitio incluye componentes reutilizables como carousels, modals y tarjetas de productos, y sigue el diseño corporativo de la carnicería.

## Tabla de Contenidos
- [Funcionalidades Generales](#funcionalidades-generales)
- [Descripción de las Páginas](#descripción-de-las-páginas)
  - [Página Principal](#1-página-principal)
  - [Productos](#2-productos)
  - [Carrito](#3-carrito)
  - [Proceder al Pago](#4-proceder-al-pago)
  - [Contacto](#5-contacto)
  - [Sugerencias](#6-sugerencias)
  - [Registro](#7-registro)
  - [Iniciar Sesión](#8-iniciar-sesión)
- [Validaciones y Funcionalidades en JavaScript](#validaciones-y-funcionalidades-en-javascript)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso del Proyecto](#uso-del-proyecto)
- [Acceso al Panel de Administración](#acceso-al-panel-de-administración)


## Funcionalidades Generales
- **Explorar productos cárnicos**: Los usuarios pueden ver una lista de productos disponibles con detalles como nombre, precio y descripción.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, ajustar las cantidades y ver el total de su compra.
- **Proceder al pago**: Los usuarios pueden ingresar su información personal y de envío para completar la compra.
- **Contactar a la carnicería**: Los usuarios pueden enviar mensajes de contacto o sugerencias a través de un formulario web.
- **Diseño responsivo**: El sitio está diseñado para ser accesible y fácil de usar en dispositivos de escritorio y móviles.

## Descripción de las Páginas

### 1. Página Principal
**Archivo**: `index.html`

**Funcionalidad**:
- Presentar la carnicería y sus valores principales.
- Incluir un carousel de imágenes para mostrar promociones y productos destacados.

**Componentes**:
- **Carousel**: Muestra imágenes promocionales.
- **Navbar**: Navegación principal del sitio.
- **Footer**: Información de contacto y enlaces adicionales.

### 2. Productos
**Archivo**: `productos.html`

**Funcionalidad**:
- Mostrar una lista de productos cárnicos disponibles para la compra.
- Permitir a los usuarios agregar productos al carrito de compras.

**Componentes**:
- **Tarjetas de productos**: Cada tarjeta muestra una imagen del producto, su nombre, descripción y precio.
- **Modal**: Confirmar si el usuario quiere seguir comprando o ir al carrito después de agregar un producto.

**Funciones en JavaScript**:
- `addToCart()`: Añade un producto al carrito.
- `showModal()`: Muestra el modal para confirmar la acción del usuario.

### 3. Carrito
**Archivo**: `carrito.html`

**Funcionalidad**:
- Mostrar los productos agregados al carrito.
- Permitir a los usuarios actualizar las cantidades de productos o eliminar productos del carrito.
- Mostrar el total de la compra y proporcionar un enlace para proceder al pago.

**Componentes**:
- **Tabla de productos**: Lista los productos en el carrito con su cantidad, precio y total.
- **Botones**: Opciones para vaciar el carrito, continuar comprando o proceder al pago.

**Funciones en JavaScript**:
- `loadCart()`: Carga los productos del carrito desde localStorage.
- `updateCartTotal()`: Calcula y muestra el total del carrito.
- `removeItem()`: Elimina un producto del carrito.
- `updateQuantity()`: Actualiza la cantidad de un producto en el carrito.
- `emptyCart()`: Vacía el carrito.

### 4. Proceder al Pago
**Archivo**: `pago.html`

**Funcionalidad**:
- Permitir a los usuarios ingresar su información personal y de envío.
- Validar la información del formulario antes de permitir la compra.
- Detectar la ubicación del usuario y sugerir región y comuna basadas en su ubicación.

**Componentes**:
- **Formulario de pago**: Campos para nombre, dirección, región, comuna y ubicación.
- **Mapa interactivo (Leaflet.js)**: Mostrar la ubicación del usuario y permitir ajustar manualmente.

**Funciones en JavaScript**:
- `loadComunas()`: Carga las comunas correspondientes a la región seleccionada.
- `getLocation()`: Obtiene la ubicación del usuario y sugiere región y comuna.
- `initMap()`: Inicializa el mapa interactivo.
- `validateForm()`: Valida los campos del formulario de pago.

### 5. Contacto
**Archivo**: `contacto.html`

**Funcionalidad**:
- Permitir a los usuarios enviar mensajes de contacto o sugerencias.
- Validar la información del formulario antes de enviar.

**Componentes**:
- **Formulario de contacto**: Campos para nombre, correo electrónico, teléfono, asunto y mensaje.

**Funciones en JavaScript**:
- `validateContactForm()`: Valida los campos del formulario de contacto.

### 6. Sugerencias
**Archivo**: `sugerencias.html`

**Funcionalidad**:
- Permitir a los usuarios enviar sugerencias específicas sobre productos o servicios.
- Validar la información del formulario antes de enviar.

**Componentes**:
- **Formulario de sugerencias**: Campos para nombre, correo electrónico, tipo de sugerencia y mensaje.

**Funciones en JavaScript**:
- `validateSuggestionForm()`: Valida los campos del formulario de sugerencias.

### 7. Registro
**Archivo**: `signup.html`

**Funcionalidad**:
- Permitir a los usuarios crear una cuenta ingresando su información personal.
- Validar la información del formulario antes de permitir el registro.

**Componentes**:
- **Formulario de registro**: Campos para nombre completo, correo electrónico, contraseña y confirmación de contraseña.

**Funciones en JavaScript**:
- `validateSignupForm()`: Valida los campos del formulario de registro.

### 8. Iniciar Sesión
**Archivo**: `login.html`

**Funcionalidad**:
- Permitir a los usuarios iniciar sesión ingresando su correo electrónico y contraseña.
- Validar la información del formulario antes de permitir el inicio de sesión.

**Componentes**:
- **Formulario de inicio de sesión**: Campos para correo electrónico y contraseña.

**Funciones en JavaScript**:
- `validateLoginForm()`: Valida los campos del formulario de inicio de sesión.

## Validaciones y Funcionalidades en JavaScript
- **Validaciones en Formulario de Pago**:
  - `validateForm()`
- **Validaciones en Formulario de Contacto**:
  - `validateContactForm()`
- **Validaciones en Formulario de Sugerencias**:
  - `validateSuggestionForm()`
- **Validaciones en Formulario de Registro**:
  - `validateSignupForm()`
- **Validaciones en Formulario de Inicio de Sesión**:
  - `validateLoginForm()`
- **Funciones del Carrito de Compras**:
  - `addToCart()`
  - `showModal()`
  - `loadCart()`
  - `updateCartTotal()`
  - `removeItem()`
  - `updateQuantity()`
  - `emptyCart()`
- **Integración con APIs y Mapas**:
  - `loadComunas()`
  - `getLocation()`
  - `initMap()`

## Tecnologías Utilizadas
- **Frontend**: HTML, CSS, JavaScript, jQuery, Bootstrap, Leaflet.js
- **Backend**: Django
- **Base de Datos**: MySQL
- **API**: API Rest para regiones y comunas

## Requisitos Previos
- Python 3.x
- Django 3.x
- MySQL
- virtualenv


## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/K4rlos96/carniceria.git
   cd carniceriaelcarvajal
   ```

2. **Crear y activar el entorno virtual:**
   ```bash
   python -m venv env
   source env/bin/activate  # En Windows usa `env\Scripts\activate`
   ```

3. **Instalar las dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configurar la base de datos en `settings.py`:**
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'nombre_base_datos',
           'USER': 'tu_usuario',
           'PASSWORD': 'tu_contraseña',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```

5. **Aplicar migraciones:**
   ```bash
   python manage.py migrate
   ```

6. **Cargar datos iniciales:**
   Asegúrate de tener el archivo `db.json` en el directorio del proyecto y luego ejecuta:
   ```bash
   python manage.py loaddata db.json
   ```

7. **Crear un superusuario:**
   ```bash
   python manage.py createsuperuser
   ```

## Uso del Proyecto

1. **Ejecutar el servidor de desarrollo:**
   ```bash
   python manage.py runserver
   ```

2. **Acceder a la aplicación en el navegador:**
   ```
   http://127.0.0.1:8000/
   ```

## Acceso al Panel de Administración

1. **Iniciar sesión como admin:**
   - Usuario: `admin`
   - Contraseña: `admin`

2. **Acceder al panel de administración de Django:**
   ```
   http://127.0.0.1:8000/admin/
   ```
