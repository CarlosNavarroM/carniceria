$(document).ready(function() {
    $("#navbar-placeholder").load("navbar.html", function() {
        updateCartCount();
    });

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        $('#cart-count').text(totalCount);
    }
});
