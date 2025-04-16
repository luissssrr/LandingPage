document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContacto");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;
            const numero = document.getElementById("numero").value;

            alert(`Gracias por contactarnos, ${nombre}!\nTe responderemos al correo: ${correo}.`);
        });
    }
});

