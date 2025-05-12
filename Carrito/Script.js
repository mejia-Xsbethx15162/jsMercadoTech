function agregarAlCarrito(producto) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    const precioProducto = parseFloat(producto.precio);
    if (isNaN(precioProducto)) {
        console.error(`Precio no válido para el producto: ${producto.nombre}`);
        return; // Si el precio no es válido, no lo agregamos
    }
    
    const productoExistente = carrito.find(item => item.nombre === producto.nombre);
    
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre: producto.nombre, precio: precioProducto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("carrito");
    const totalElemento = document.getElementById("total");

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    listaCarrito.innerHTML = "";  

    let total = 0;

    carrito.forEach((producto, index) => {
        const precioProducto = parseFloat(producto.precio);
        if (isNaN(precioProducto)) {
            console.error(`Precio no válido para el producto: ${producto.nombre}`);
            return;
        }

        total += precioProducto * producto.cantidad;

        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${(precioProducto * producto.cantidad).toFixed(2)} (x${producto.cantidad})`;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarDelCarrito(index); 
        item.appendChild(botonEliminar);  

        listaCarrito.appendChild(item);  
    });

    totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}

function eliminarDelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", actualizarCarrito);

