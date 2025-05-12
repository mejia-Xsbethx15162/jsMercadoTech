document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        { id: 1, nombre: "Detergente", cantidad: 20, precio: 5.99 },
        { id: 2, nombre: "Jabón Líquido", cantidad: 15, precio: 3.50 },
        { id: 3, nombre: "Desinfectante", cantidad: 10, precio: 7.00 },
        { id: 4, nombre: "Escoba", cantidad: 25, precio: 8.20 },
    ];

    const tabla = document.getElementById("tabla-inventario");
    const listaProductosFaltantes = document.getElementById("lista-productos-faltantes");

    productos.forEach(producto => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>
                <button onclick="agregarProductoFaltante(${producto.id})">Marcar como Faltante</button>
            </td>
        `;
        tabla.appendChild(fila);
    });

    
    window.agregarProductoFaltante = function(id) {
        const producto = productos.find(p => p.id === id);
        if (!producto) return;

      
        let productosFaltantes = JSON.parse(localStorage.getItem("productosFaltantes")) || [];
        productosFaltantes.push({ id: producto.id, nombre: producto.nombre, cantidad: producto.cantidad });
        localStorage.setItem("productosFaltantes", JSON.stringify(productosFaltantes));

        alert(`Producto "${producto.nombre}" marcado como faltante.`);

        actualizarListaFaltantes();
    };


    function actualizarListaFaltantes() {
        const productosFaltantes = JSON.parse(localStorage.getItem("productosFaltantes")) || [];
        listaProductosFaltantes.innerHTML = ""; 

        productosFaltantes.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = `${producto.nombre} - Cantidad faltante: ${producto.cantidad}`;
            listaProductosFaltantes.appendChild(li);
        });
    }

    actualizarListaFaltantes();
});
