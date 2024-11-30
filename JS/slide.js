let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let autoSlideTimer; // Variable para almacenar el temporizador

// Muestra la imagen según el índice
function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    // Oculta todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Quita la clase "active" de todos los dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Muestra la imagen actual y marca el dot activo
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

    // Reinicia el temporizador cuando se cambia la imagen manualmente
    resetAutoSlide();
}

// Función para avanzar o retroceder con botones
function plusSlides(n) {
    showSlides(slideIndex + n);
}

// Función para ir directamente a una imagen con los dots
function currentSlide(n) {
    showSlides(n);
}

// Automáticamente cambia la imagen cada 5 segundos
function autoSlide() {
    showSlides(slideIndex + 1);
    autoSlideTimer = setTimeout(autoSlide, 120000); // Cambia de imagen cada 5 segundos
}

// Detiene el temporizador actual y lo reinicia
function resetAutoSlide() {
    clearTimeout(autoSlideTimer); // Detiene el temporizador actual
    autoSlideTimer = setTimeout(autoSlide, 120000); // Reinicia el temporizador
}

// Inicia el slideshow automático
autoSlide();
