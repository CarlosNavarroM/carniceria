$(document).ready(function() {
    // Cargar el carrito al iniciar
    loadCart();

    // Evento para vaciar el carrito
    $('#emptyCartBtn').click(function() {
        localStorage.removeItem('cart');
        loadCart();
        updateCartCount();
    });

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartTableBody = $('#cartTable tbody');
        cartTableBody.empty();
        let total = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const row = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td><input type="number" class="form-control quantity-input" data-index="${index}" value="${item.quantity}" min="1"></td>
                    <td>${itemTotal}</td>
                    <td><button class="btn btn-danger remove-item-btn" data-index="${index}">Eliminar</button></td>
                </tr>
            `;
            cartTableBody.append(row);
        });

        $('#cartTotal').text(`$${total}`);
    }

    // Evento para actualizar la cantidad de un producto
    $(document).on('change', '.quantity-input', function() {
        const index = $(this).data('index');
        const quantity = $(this).val();
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart[index].quantity = parseInt(quantity, 10);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateCartCount();
    });

    // Evento para eliminar un producto del carrito
    $(document).on('click', '.remove-item-btn', function() {
        const index = $(this).data('index');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateCartCount();
    });

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        $('#cart-count').text(totalCount);
    }
});
