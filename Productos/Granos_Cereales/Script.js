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
        { nombre: "Arroz.", precio: 1.80, img: "/img/arroz.png" },
        { nombre: "Frijoles.", precio: 2.20, img: "/img/frijoles.png" },
        { nombre: "Lentejas.", precio: 1.90, img: "/img/lentejas.png" },
        { nombre: "Avena.", precio: 3.00, img: "/img/avena.png" },
        { nombre: "Harina de trigo", precio: 2.50, img: "/img/harina.png" },
        { nombre: "Maíz", precio: 1.60, img: "/img/maiz.png" },
        { nombre: "Quinua", precio: 5.00, img: "/img/quinua.png" },
        { nombre: "Cebada", precio: 2.30, img: "/img/cebada.png" },
        { nombre: "Chía", precio: 6.50, img: "/img/chia.png" },
        { nombre: "Centeno", precio: 2.80, img: "/img/centeno.png" },
        { nombre: "Trigo", precio: 1.75, img: "/img/trigo.png" },
        { nombre: "Soja", precio: 2.60, img: "/img/soja.png" },
        { nombre: "Sorgo", precio: 3.10, img: "/img/sorgo.png" },
        { nombre: "Alpiste", precio: 4.00, img: "/img/alpiste.png" },
        { nombre: "Mijo", precio: 3.50, img: "/img/mijo.png" }
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
    elem.className = 'granos-cereales';
    
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

