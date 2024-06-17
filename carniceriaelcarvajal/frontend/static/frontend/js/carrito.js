$(document).ready(function() {
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartTableBody = document.querySelector('#cartTable tbody');
        cartTableBody.innerHTML = '';

        if (cart.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="5" class="text-center">El carrito está vacío</td>';
            cartTableBody.appendChild(row);
        } else {
            cart.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${formatCurrency(item.price)}</td>
                    <td><input type="number" value="${item.quantity}" min="1" class="form-control quantity-input" data-id="${item.id}"></td>
                    <td>${formatCurrency(item.price * item.quantity)}</td>
                    <td><button class="btn btn-primary btn-sm remove-item" data-id="${item.id}">Eliminar</button></td>
                `;
                cartTableBody.appendChild(row);
            });
        }

        updateCartTotal();
        updateCartCount(); // Actualiza el contador del carrito al cargar
    }

    function updateCartTotal() {
        let total = 0;
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        document.getElementById('cartTotal').innerText = formatCurrency(total);
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        $('#cart-count').text(totalCount);
    }

    function removeItem(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }

    function updateQuantity(productId, quantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const index = cart.findIndex(item => item.id === productId);
        if (index !== -1) {
            cart[index].quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }
    }

    function emptyCart() {
        localStorage.removeItem('cart');
        loadCart();
    }

    // Evento para eliminar un producto
    $(document).on('click', '.remove-item', function() {
        const productId = $(this).data('id');
        removeItem(productId);
    });

    // Evento para actualizar cantidad
    $(document).on('change', '.quantity-input', function() {
        const productId = $(this).data('id');
        const quantity = parseInt($(this).val());
        if (quantity > 0) {
            updateQuantity(productId, quantity);
        }
    });

    // Evento para vaciar el carrito
    document.querySelector('#emptyCartBtn').addEventListener('click', function() {
        emptyCart();
    });

    // Función para formatear el precio en CLP
    function formatCurrency(amount) {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
    }

    loadCart();
    updateCartCount(); // Actualiza el contador del carrito al cargar la página
});
