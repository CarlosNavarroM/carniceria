$(document).ready(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        let nombre = $('#nombre').val().trim();
        let correo = $('#correo').val().trim();
        let telefono = $('#telefono').val().trim();
        let asunto = $('#asunto').val().trim();
        let suggestionType = $('#suggestionType').val();
        let sugerencia = $('#sugerencia').val().trim();

        if (!nombre) {
            alert('El campo de nombre está vacío.');
            return;
        }

        if (!correo) {
            alert('El campo de correo electrónico está vacío.');
            return;
        }

        if (!validateEmail(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if (!telefono) {
            alert('El campo de teléfono está vacío.');
            return;
        }

        if (!asunto) {
            alert('El campo de asunto está vacío.');
            return;
        }

        if (!suggestionType) {
            alert('Por favor, selecciona un tipo de sugerencia.');
            return;
        }

        if (!sugerencia) {
            alert('El campo de sugerencia está vacío.');
            return;
        }

        // Aquí puedes agregar la lógica para manejar el formulario si todas las validaciones pasan
        alert('Formulario enviado correctamente.');
    });

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
