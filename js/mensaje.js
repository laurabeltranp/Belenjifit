
// Obtén el formulario y el elemento de mensaje de éxito
const form = document.querySelector('form');
const mensajeExito = document.getElementById('mensajeExito');

// Agrega un evento de envío al formulario
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Envía el formulario utilizando Fetch API o XMLHttpRequest
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        });

        if (response.ok) {
            // El formulario se procesó correctamente
            mensajeExito.style.display = 'block'; // Muestra el mensaje de éxito
            form.reset(); // Limpia el formulario si es necesario
            // Redirige a la página de inicio después de un cierto tiempo
            setTimeout(() => {
                window.location.href = form.querySelector('input[name="_next"]').value;
            }, 3000); // Redirige después de 3 segundos (puedes ajustar el tiempo)
        } else {
            // Maneja el caso en el que el formulario no se procesó correctamente
            console.error('Error al procesar el formulario');
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
});