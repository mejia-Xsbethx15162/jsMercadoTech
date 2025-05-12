window.onload = inicializarTienda;

function inicializarTienda() {
    const productos = obtenerProductos();
    const contenedor = document.querySelector(".productos-container");
    
    if (!contenedor) {
        console.error("No se encontró el contenedor de productos");
        return;
    }
    
    mostrarProductos(productos, contenedor);
}

function obtenerProductos() {
    return [
        { nombre: "Manzanas", precio: "2.50/kg", img: "/img/manzana.png" },
        { nombre: "Plátanos.", precio: "1.80/kg", img: "/img/platano.png" },
        { nombre: "Naranjas", precio: "2.20/kg", img: "/img/naranja.png" },
        { nombre: "Fresas", precio: "4.00/kg", img: "/img/fresas.png" },
        { nombre: "Mangos", precio: "3.50/kg", img: "/img/mango.png" },
        { nombre: "Peras", precio: "3.00/kg", img: "/img/pera.png" },
        { nombre: "Lechuga", precio: "1.50/unidad", img: "/img/lechuga.png" },
        { nombre: "Tomates", precio: "2.80/kg", img: "/img/tomate.png" },
        { nombre: "Pepinos", precio: "1.99/kg", img: "/img/pepino.png" },
        { nombre: "Zanahorias", precio: "1.75/kg", img: "/img/zanahoria.png" },
        { nombre: "Cebollas", precio: "2.00/kg", img: "/img/cebolla.png" },
        { nombre: "Pimientos", precio: "2.50/kg", img: "/img/pimiento.png" },
        { nombre: "Brócoli", precio: "3.20/kg", img: "/img/brocoli.png" },
        { nombre: "Espinacas", precio: "1.99/paquete", img: "/img/espinaca.png" },
        { nombre: "Uvas", precio: "3.80/kg", img: "/img/uvas.png" },
        { nombre: "Piñas", precio: "2.90/unidad", img: "/img/pina.png" },
        { nombre: "Sandía", precio: "5.00/unidad", img: "/img/sandia.png" },
        { nombre: "Papaya", precio: "4.50/kg", img: "/img/papaya.png" },
        { nombre: "Melón", precio: "3.60/kg", img: "/img/melon.png" },
        { nombre: "Aguacate", precio: "4.20/kg", img: "/img/aguacate.png" },
        { nombre: "Coliflor", precio: "2.99/unidad", img: "/img/coliflor.png" },
        { nombre: "Berenjena", precio: "3.40/kg", img: "/img/berenjena.png" },
        { nombre: "Calabacín", precio: "2.30/kg", img: "/img/calabacin.png" },
        { nombre: "Remolacha", precio: "2.10/kg", img: "/img/remolacha.png" },
        { nombre: "Rábanos", precio: "1.70/paquete", img: "/img/rabanos.png" }
    ];
}

function mostrarProductos(prods, donde) {
    donde.innerHTML = '';
    
    prods.forEach(producto => {
        donde.appendChild(crearElementoProducto(producto));
    });
}

function crearElementoProducto(prod) {
    const elem = document.createElement('div');
    elem.className = 'frutas-verduras';
    
    const img = document.createElement('img');
    img.src = prod.img;
    img.alt = prod.nombre;
    
    const divNombre = document.createElement('div');
    divNombre.className = 'nombre';
    divNombre.textContent = prod.nombre;
    
    const divPrecio = document.createElement('div');
    divPrecio.className = 'precio';
    divPrecio.textContent = prod.precio;

    
    
    const boton = document.createElement('button');
    boton.className = 'agregar-carrito';
    boton.textContent = 'Añadir al carrito';
    
    boton.addEventListener('click', function() {
        agregarAlCarrito(prod);
    });
    
    elem.appendChild(img);
    elem.appendChild(divNombre);
    elem.appendChild(divPrecio);
    elem.appendChild(boton);
    
    return elem;
}

function agregarAlCarrito(producto) {
    let carrito = leerCarrito();
    
    let encontrado = false;
    
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === producto.nombre) {
            carrito[i].cantidad += 1;
            encontrado = true;
            break;
        }
    }
    
    if (!encontrado) {
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }
    
    guardarCarrito(carrito);
    
    alert(producto.nombre + " añadido al carrito");
}

function leerCarrito() {
    try {
        const datos = localStorage.getItem('carrito');
        return datos ? JSON.parse(datos) : [];
    } catch (error) {
        console.warn('Error al leer el carrito:', error);
        return [];
    }
}

function guardarCarrito(carrito) {
    try {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    } catch (error) {
        console.error('No se pudo guardar en localStorage:', error);
    }
}