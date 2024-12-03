function redirectToPreviousPage() {
    // Comprueba si el documento tiene una página de referencia (referer)
    if (document.referrer) {
        // Si existe, redirige al usuario a esa página de referencia
        window.location.href = document.referrer;
    } else {
        // Si no hay página de referencia, redirige a la página predeterminada
        window.location.href = 'index.html';  
    }
    return false; // Previene cualquier acción predeterminada que invoque esta función
}
