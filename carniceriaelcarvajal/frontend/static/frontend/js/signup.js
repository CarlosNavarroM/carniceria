$(document).ready(function() {
    $('#signup-form').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        let username = $('#username').val().trim();
        let email = $('#email').val().trim();
        let password = $('#password').val().trim();
        let password2 = $('#password2').val().trim();

        if (!username) {
            alert('El campo de nombre completo está vacío.');
            return;
        }

        if (!email) {
            alert('El campo de correo electrónico está vacío.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if (!password) {
            alert('El campo de contraseña está vacío.');
            return;
        }

        if (!password2) {
            alert('El campo de repetir contraseña está vacío.');
            return;
        }

        if (password !== password2) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Si todas las validaciones pasan, se puede proceder con la lógica adicional
        // Por ejemplo, podrías mostrar un mensaje de éxito o realizar otras acciones en el frontend
        alert('Registro exitoso');
    });

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
