document.addEventListener("DOMContentLoaded", function () {
    const listaProductosFaltantes = document.getElementById("lista-productos-faltantes");


    function cargarProductosFaltantes() {
        const productosFaltantes = JSON.parse(localStorage.getItem("productosFaltantes")) || [];

        listaProductosFaltantes.innerHTML = "";

        if (productosFaltantes.length === 0) {
            const li = document.createElement("li");
            li.textContent = "No hay productos faltantes.";
            listaProductosFaltantes.appendChild(li);
        }

        productosFaltantes.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = `${producto.nombre} - Cantidad faltante: ${producto.cantidad}`;
            listaProductosFaltantes.appendChild(li);
        });
    }

    cargarProductosFaltantes();


    const formulario = document.getElementById("formulario-actualizar");
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const idProducto = document.getElementById("producto-id").value;
        const cantidad = document.getElementById("cantidad").value;

        alert(`Producto con ID ${idProducto} actualizado. Cantidad enviada: ${cantidad}`);
 
    });
});
