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
        { 
             nombre: 'Jabón en Polvo',
            precio: 2.99,
            img: '/assets/JabonPolvo.png' // <--- MODIFICADO AQUÍ
        },
        { 
            nombre: "Detergente Líquido", 
            precio: 5.99, 
            img: '/assets/DetergenteLiquido.png' },
        { 
            nombre: "Papel Higiénico", 
            precio: 6.99, 
            img: '/assets/PapelHigienico.png' },
        { 
            nombre: "Desinfectante", 
            precio: 6.50, 
            img: '/assets/GelDesinfectante.png' },
        { 
            nombre: "Suavizante de Ropa", 
            precio: 4.50, 
            img: '/assets/SuavizanteRopa.png' },
        { 
            nombre: "Escoba", 
            precio: 8.99, 
            img: '/assets/Escoba.png' },
        { 
            nombre: "Trapeador",
            precio: 7.99, 
            img: '/assets/Trapeador.png' },
        { 
            nombre: "Limpiador Multiusos", 
            precio: 2.99, 
            img: '/assets/LimpiadorMultiusos.png' },
        { 
            nombre: "Esponjas", 
            precio: 2.49, 
            img: '/assets/Esponjas.png' },
        { 
            nombre: "Aromatizante", 
            precio: 3.50, 
            img: '/assets/Aromatizante.png' },
        { 
            nombre: "Toallitas Desinfectantes", 
            precio: 4.99, 
            img: '/assets/Toallitas.png' },
        { 
            nombre: "Lavatrastes", 
            precio: 2.99, 
            img: '/assets/Lavatrastes.png' },
        { 
            nombre: "Shampoo",

            precio: 5.99, 
            img: '/assets/Shampoo.png' },
        { 
            nombre: "Cloro", 
            precio: 1.99, 
            img: '/assets/Cloro.png' },
        { 
            nombre: "Jabón de manos", 
            precio: 1.99, 
            img: '/assets/JabonManos.png' },
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
    elem.className = 'aseo';
    
    
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

