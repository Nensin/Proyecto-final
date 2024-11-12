document.addEventListener("DOMContentLoaded", cargarCarritoDeLocalStorage);

// Seleccionar todos los botones de agregar al carrito en el DOM al cargar la página
document.querySelectorAll(".agregar-carrito").forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
});

function agregarAlCarrito(e) {
    const productoElemento = e.target.parentElement;
    
    // Verificación para asegurar que la estructura del producto es correcta
    if (!productoElemento) {
        console.error("El elemento del producto no se encontró.");
        return;
    }

    const nombreProducto = productoElemento.querySelector("h2")?.innerText || "Producto sin nombre";
    const precioProducto = productoElemento.querySelector("p")?.innerText || "$0";
    const imagenProducto = productoElemento.querySelector("img")?.src || ""; 

    const producto = {
        id: e.target.dataset.id,
        nombre: nombreProducto,
        precio: precioProducto,
        imagen: imagenProducto,
        cantidad: 1
    };

    if (!producto.imagen) {
        console.warn("Imagen no encontrada para el producto:", producto.nombre);
    }

    // Revisa si el carrito ya tiene productos en Local Storage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExistente = carrito.find(item => item.id === producto.id);

    // Agregar o incrementar cantidad
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarritoEnPantalla();

    console.log(`Producto añadido: ${producto.nombre}`);
}

function mostrarCarritoEnPantalla() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const listaCarrito = document.querySelector("#lista-carrito tbody");
    listaCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td><img src="${producto.imagen}" width="50"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td><button class="eliminar-producto" data-id="${producto.id}">Eliminar</button></td>
        `;
        listaCarrito.appendChild(fila);
    });

    console.log("Carrito actualizado en pantalla.");
}

function cargarCarritoDeLocalStorage() {
    mostrarCarritoEnPantalla();
    console.log("Carrito cargado desde Local Storage.");
}
