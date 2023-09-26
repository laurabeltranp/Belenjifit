document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const mensajeExito = document.getElementById("mensajeExito");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

        // Aquí agregarías la lógica para enviar el formulario al servidor si es necesario

        // Mostrar el mensaje de éxito
        mensajeExito.style.display = "block";

        // Puedes redirigir al usuario a una página de confirmación o realizar otras acciones aquí
    });
});