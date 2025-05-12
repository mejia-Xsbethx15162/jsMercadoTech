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
        { nombre: "Carne de Res", precio: 10.50, img: "/img/carne_res.png" },
        { nombre: "Pechuga de Pollo", precio: 8.75, img: "/img/pechuga_pollo.png" },
        { nombre: "Chuletas de Cerdo.", precio: 9.20, img: "/img/chuletas_cerdo.png" },
        { nombre: "Salchichas", precio: 4.50, img: "/img/salchichas.png" },
        { nombre: "Chorizo", precio: 5.75, img: "/img/chorizo.png" },
        { nombre: "Carne Molida", precio: 7.80, img: "/img/carne_molida.png" },
        { nombre: "Jamón de Pavo", precio: 6.99, img: "/img/jamon_pavo.png" },
        { nombre: "Bistec de Res", precio: 11.00, img: "/img/bistec_res.png" },
        { nombre: "Costillas de Cerdo", precio: 12.50, img: "/img/costillas_cerdo.png" }
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
    elem.className = 'carnicos';
    
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