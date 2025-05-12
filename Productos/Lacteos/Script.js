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
        { nombre: "Leche Entera.", precio: 1.50, img: "/img/leche_entera.png" },
        { nombre: "Yogur Natural.", precio: 2.00, img: "/img/yogur_natural.png" },
        { nombre: "Queso Mozzarella.", precio: 3.75, img: "/img/queso_mozzarella.png" },
        { nombre: "Mantequilla.", precio: 2.50, img: "/img/mantequilla.png" },
        { nombre: "Queso Cheddar.", precio: 4.00, img: "/img/queso_cheddar.png" },
        { nombre: "Crema de Leche.", precio: 2.20, img: "/img/crema_leche.png" },
        { nombre: "Yogur de Fresa.", precio: 2.10, img: "/img/yogur_fresa.png" },
        { nombre: "Leche Deslactosada.", precio: 1.80, img: "/img/leche_deslactosada.png" },
        { nombre: "Queso Parmesano.", precio: 5.50, img: "/img/queso_parmesano.png" },
        { nombre: "Leche Condensada.", precio: 3.25, img: "/img/leche_condensada.png" }
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
    elem.className = 'lacteos';
    
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

