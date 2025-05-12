document.addEventListener("DOMContentLoaded", () => {
    const usuarioGuardado = localStorage.getItem("usuario");
    const contraseñaGuardada = localStorage.getItem("contraseña");
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (!usuarioGuardado || !contraseñaGuardada) {
                event.preventDefault();
                alert("Debes iniciar sesión para acceder a esta sección.");
                window.location.href = "/login/index.html";
            }
        });
    });

    if (!usuarioGuardado || !contraseñaGuardada) {
        if (window.location.pathname !== '/login/index.html') {
            alert("Debes iniciar sesión para acceder a esta página.");
            window.location.href = "/login/index.html";
        }
    }
});