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
        { nombre: "Jugo de Naranja", precio: 2.50, img: "/img/jugo_naranja.png" },
        { nombre: "Soda de Limón", precio: 1.99, img: "/img/soda_limon.png" },
        { nombre: "Agua Mineral", precio: 1.50, img: "/img/agua_mineral.png" },
        { nombre: "Cerveza Lager", precio: 3.99, img: "/img/cerveza_lager.png" },
        { nombre: "Vino Tinto", precio: 12.99, img: "/img/vino_tinto.png" },
        { nombre: "Té Helado", precio: 2.20, img: "/img/te_helado.png" },
        { nombre: "Café Frío", precio: 3.50, img: "/img/cafe_frio.png" },
        { nombre: "Leche Chocolatada", precio: 2.80, img: "/img/leche_choco.png" },
        { nombre: "Energizante", precio: 3.99, img: "/img/energizante.png" },
        { nombre: "Batido de Frutas", precio: 4.50, img: "/img/batido_frutas.png" },
        { nombre: "Limonada", precio: 1.80, img: "/img/limonada.png" },
        { nombre: "Soda de Uva", precio: 2.00, img: "/img/soda_uva.png" }
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
    elem.className = 'bebidas';
    
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









