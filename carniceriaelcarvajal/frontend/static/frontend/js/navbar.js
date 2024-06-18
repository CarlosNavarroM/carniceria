$(document).ready(function() {
    $("#navbar-placeholder").load("{% url 'navbar' %}", function() {
        updateCartCount();

        // Cierra el menú colapsable al hacer clic en un enlace del menú
        $('.navbar-nav a').click(function() {
            if ($('.navbar-toggler').is(':visible')) {
                $('.navbar-collapse').collapse('hide');
            }
        });

        // Cierra el menú colapsable al hacer clic en cualquier área fuera del menú en dispositivos móviles
        $(document).click(function(event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });
    });

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        $('#cart-count').text(totalCount);
    }
});
