$(document).ready(function() {
    // Cargar el navbar
    $("#navbar-placeholder").load("navbar.html", function() {
        updateCartCount();
    });

    // Función para añadir producto al carrito
    $('.add-to-cart').click(function() {
        const productId = $(this).data('id');
        const productName = $(this).data('name');
        const productPrice = $(this).data('price');
        const quantity = parseInt($(this).siblings('.quantity-input').val());
        const product = { id: productId, name: productName, price: productPrice, quantity: quantity };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const index = cart.findIndex(item => item.id === productId);

        if (index === -1) {
            cart.push(product);
        } else {
            cart[index].quantity += quantity;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        $('#cartModal').modal('show');
    });

    // Función para actualizar la cantidad de productos en el carrito
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        $('#cart-count').text(totalCount);
    }
});
