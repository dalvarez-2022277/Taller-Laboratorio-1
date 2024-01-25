// script.js

$(document).ready(function() {
    // Desplazamiento suave al hacer clic en el enlace de la sección "porque"
    $('#porque-link').on('click', function(e) {
        e.preventDefault();

        // Obtenemos la posición de la sección "porque"
        var targetOffset = $('#porque-section').offset().top;

        // Desplazamiento suave hacia la sección "porque"
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000); // Puedes ajustar la duración del desplazamiento según tus preferencias
    });
});
