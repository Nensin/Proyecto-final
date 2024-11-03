// Variables
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('.funko-container'); // Ajusta según tu HTML
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar al Carrito"
    listaProductos.addEventListener('click', agregarProducto);

    // Cuando se elimina un producto del carrito
    carrito.addEventListener('click', eliminarProducto);

    // Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

// Función que añade el producto al carrito
function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const producto = e.target.closest('.funko-card');
        leerDatosProducto(producto);
    }
}

// Lee los datos del producto
function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        nombre: producto.querySelector('h2').textContent,
        precio: producto.querySelector('p').textContent.replace('$', ''),
        id: producto.querySelector('button').getAttribute('data-id'), 
        cantidad: 1
    };

    // Verifica si el producto ya existe en el carrito
    const existe = articulosCarrito.some(prod => prod.id === infoProducto.id);
    if (existe) {
        // Actualizamos la cantidad
        articulosCarrito = articulosCarrito.map(prod => {
            if (prod.id === infoProducto.id) {
                prod.cantidad++;
            }
            return prod;
        });
    } else {
        // Agregamos el producto al carrito
        articulosCarrito = [...articulosCarrito, infoProducto];
    }
    
    carritoHTML();
}

// Muestra el carrito en el HTML
function carritoHTML() {
    // Limpiar el HTML actual del carrito
    contenedorCarrito.innerHTML = '';

    articulosCarrito.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.imagen}" width="100"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td><a href="#" class="borrar-producto" data-id="${producto.id}">X</a></td>
        `;
        contenedorCarrito.appendChild(row);
    });
}

// Elimina el producto del carrito en el DOM
function eliminarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');
        
        // Eliminar del array del carrito
        articulosCarrito = articulosCarrito.filter(prod => prod.id !== productoId);

        carritoHTML();
    }
}

// Vacía el carrito en el DOM
function vaciarCarrito() {
    articulosCarrito = []; // Resetea el arreglo
    contenedorCarrito.innerHTML = ''; // Elimina todo el HTML
}
