$(document).ready(function() {
    // Evento para añadir productos al carrito
    $('.add-to-cart').click(function() {
        const id = $(this).data('id');
        const name = $(this).data('name');
        const price = $(this).data('price');
        const quantity = parseInt($(this).siblings('.quantity-input').val(), 10);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ id, name, price, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        $('#cartModal').modal('show');
    });

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        $('#cart-count').text(totalCount);
    }

    // Actualizar el contador del carrito al cargar la página
    updateCartCount();
});
