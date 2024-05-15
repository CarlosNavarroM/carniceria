# Documentación del Proyecto: Carnicería El Carvajal

## Descripción General

Carnicería El Carvajal es una tienda en línea que permite a los usuarios explorar productos cárnicos, agregar artículos a un carrito de compras y proceder con el pago. El sitio web está diseñado para ofrecer una experiencia de usuario intuitiva y eficiente, permitiendo la navegación por diferentes secciones como productos, contacto y sugerencias. La página utiliza componentes reutilizables como carousels, modals y tarjetas de productos, y está estilizada siguiendo el diseño corporativo de la carnicería.

## Funcionalidades Generales

- **Explorar productos cárnicos**: Los usuarios pueden ver una lista de productos disponibles con detalles como nombre, precio y descripción.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, ajustar las cantidades y ver el total de su compra.
- **Proceder al pago**: Los usuarios pueden ingresar su información personal y de envío para completar la compra.
- **Contactar a la carnicería**: Los usuarios pueden enviar mensajes de contacto o sugerencias a través de un formulario web.
- **Diseño responsivo**: El sitio está diseñado para ser accesible y fácil de usar en dispositivos de escritorio y móviles.

## Descripción de las Páginas

### 1. Página Principal (index.html)

**Funcionalidad**:

- Presentar la carnicería y sus valores principales.
- Incluir un carousel de imágenes para mostrar promociones y productos destacados.

**Componentes**:

- Carousel: Muestra imágenes promocionales.
- Navbar: Navegación principal del sitio.
- Footer: Información de contacto y enlaces adicionales.

### 2. Productos (productos.html)

**Funcionalidad**:

- Mostrar una lista de productos cárnicos disponibles para la compra.
- Permitir a los usuarios agregar productos al carrito de compras.

**Componentes**:

- Tarjetas de productos (cards): Cada tarjeta muestra una imagen del producto, su nombre, descripción y precio.
- Modal: Confirmar si el usuario quiere seguir comprando o ir al carrito después de agregar un producto.

### 3. Carrito (carrito.html)

**Funcionalidad**:

- Mostrar los productos agregados al carrito.
- Permitir a los usuarios actualizar las cantidades de productos o eliminar productos del carrito.
- Mostrar el total de la compra y proporcionar un enlace para proceder al pago.

**Componentes**:

- Tabla de productos: Lista los productos en el carrito con su cantidad, precio y total.
- Botones: Opciones para vaciar el carrito, continuar comprando o proceder al pago.

### 4. Proceder al Pago (pago.html)

**Funcionalidad**:

- Permitir a los usuarios ingresar su información personal y de envío.
- Validar la información del formulario antes de permitir la compra.
- Detectar la ubicación del usuario y sugerir región y comuna basadas en su ubicación.

**Componentes**:

- Formulario de pago: Campos para nombre, dirección, región, comuna y ubicación.
- Mapa interactivo (Leaflet.js): Mostrar la ubicación del usuario y permitir ajustar manualmente.

### 5. Contacto (contacto.html)

**Funcionalidad**:

- Permitir a los usuarios enviar mensajes de contacto o sugerencias.
- Validar la información del formulario antes de enviar.

**Componentes**:

- Formulario de contacto: Campos para nombre, correo electrónico, teléfono, asunto y mensaje.

### 6. Sugerencias (sugerencias.html)

**Funcionalidad**:

- Permitir a los usuarios enviar sugerencias específicas sobre productos o servicios.
- Validar la información del formulario antes de enviar.

**Componentes**:

- Formulario de sugerencias: Campos para nombre, correo electrónico, tipo de sugerencia y mensaje.

## Validaciones y Funcionalidades en JavaScript

### Validaciones en Formulario de Pago

- Nombre Completo: Validación para asegurar que el campo no esté vacío.
- Dirección: Validación para asegurar que el campo no esté vacío.
- Región: Validación para asegurar que el usuario seleccione una región.
- Comuna: Validación para asegurar que el usuario seleccione una comuna.
- Ubicación: Validación para asegurar que el campo no esté vacío.

### Funciones en JavaScript

- `updateCartCount()`: Actualiza el contador de productos en el carrito.
- `getLocation()`: Obtiene la ubicación del usuario y sugiere región y comuna.
- `loadComunas()`: Carga las comunas correspondientes a la región seleccionada.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap
- Leaflet.js (para mapas)
- API Rest (para regiones y comunas)