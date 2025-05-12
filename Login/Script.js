// js/login.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const password = document.getElementById("password").value;

            const usuarioGuardado = localStorage.getItem("usuario");
            const contraseñaGuardada = localStorage.getItem("contraseña");

            if (nombre === usuarioGuardado && password === contraseñaGuardada && usuarioGuardado && contraseñaGuardada) {
                alert("Inicio de sesión exitoso");
                window.location.href = "/nave_inicio/index.html"; // Redirige a la página de inicio
            } else {
                alert("Usuario o contraseña incorrectos o no registrados.");
            }
        });
    }

    const registrarseLink = document.getElementById("registrarseLink");
    if (registrarseLink) {
        registrarseLink.addEventListener("click", (e) => {
            // Puedes agregar lógica aquí si es necesario, por ejemplo,
            // guardar la página actual antes de redirigir.
        });
    }
});