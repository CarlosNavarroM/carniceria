$(document).ready(function() {
    $('#login-form').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        let email = $('#email').val().trim();
        let password = $('#password').val().trim();

        if (!email) {
            alert('El campo de correo electrónico está vacío.');
            return;
        }

        if (!password) {
            alert('El campo de contraseña está vacío.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if (!validatePassword(password)) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

    
    });

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        // Puedes agregar más criterios de validación si lo deseas
        return password.length >= 6;
    }
});
