// js/registro.js

document.addEventListener("DOMContentLoaded", () => {
    const registroForm = document.getElementById("registroForm");
    const passwordInput = document.getElementById("password");
    const confirmarPasswordInput = document.getElementById("confirmarPassword");

    if (registroForm) {
        registroForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const password = passwordInput.value;
            const confirmarPassword = confirmarPasswordInput.value;

            if (password !== confirmarPassword) {
                alert("Las contraseñas no coinciden.");
                return; // Detiene el proceso de registro si las contraseñas no coinciden
            }

            localStorage.setItem("usuario", nombre);
            localStorage.setItem("contraseña", password);
            localStorage.setItem("email", email); // Opcional: guardar el email también

            alert("¡Registro exitoso!");
            window.location.href = "/login/index.html"; // Redirige a la página de inicio de sesión
        });

        confirmarPasswordInput.addEventListener("input", () => {
            if (passwordInput.value !== confirmarPasswordInput.value) {
                confirmarPasswordInput.setCustomValidity("Las contraseñas no coinciden.");
            } else {
                confirmarPasswordInput.setCustomValidity(""); // Restablece la validez si coinciden
            }
        });
    }
});