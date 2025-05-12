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
        { nombre: "Chocolate con Leche", precio: 2.99, img: "/img/chocolate_leche.png" },
        { nombre: "Gomitas de Frutas", precio: 1.99, img: "/img/gomitas.png" },
        { nombre: "Caramelos de Menta", precio: 1.49, img: "/img/menta.png" },
        { nombre: "Tableta de Chocolate Amargo", precio: 3.99, img: "/img/chocolate_amargo.png" },
        { nombre: "Chocolates Rellenos", precio: 4.50, img: "/img/chocolates_rellenos.png" },
        { nombre: "Mazapanes", precio: 2.50, img: "/img/mazapan.png" },
        { nombre: "Paletas de Caramelo", precio: 1.25, img: "/img/paletas.png" },
        { nombre: "Chicles de Frutas", precio: 0.99, img: "/img/chicles.png" },
        { nombre: "Barras de Chocolate con Almendras", precio: 3.75, img: "/img/chocolate_almendras.png" },
        { nombre: "Cajeta Tradicional", precio: 4.99, img: "/img/cajeta.png" },
        { nombre: "Trufas de Chocolate", precio: 5.50, img: "/img/trufas.png" },
        { nombre: "Galletas con Chispas de Chocolate", precio: 3.25, img: "/img/galletas_chocolate.png" },
        { nombre: "Turrón de Almendra", precio: 4.75, img: "/img/turron.png" },
        { nombre: "Bombones", precio: 2.30, img: "/img/bombones.png" },
        { nombre: "Dulces de Tamarindo", precio: 1.80, img: "/img/tamarindo.png" },
        { nombre: "Chocolates Blancos", precio: 3.99, img: "/img/chocolate_blanco.png" },
        { nombre: "Barras Energéticas de Chocolate", precio: 2.95, img: "/img/barra_energetica.png" },
        { nombre: "Caramelos de Frutas", precio: 1.60, img: "/img/caramelos_frutas.png" },
        { nombre: "Coco Rallado con Chocolate", precio: 3.40, img: "/img/coco_chocolate.png" }
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
    elem.className = 'dulce';
    
    const img = document.createElement('img');
    img.src = prod.img;
    img.alt = prod.nombre;
    
    const divNombre = document.createElement('div');
    divNombre.className = 'nombre';
    divNombre.textContent = prod.nombre;
    
    const divPrecio = document.createElement('div');
    divPrecio.className = 'precio';
    divPrecio.textContent = '$' + prod.precio.toFixed(2);
    
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