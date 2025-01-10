// Obtener referencias del DOM
const abrirRuletaBtn = document.getElementById('abrirRuletaBtn');
const ruletaModal = document.getElementById('ruletaModal');
const closeModal = document.querySelector('.close');

// Evento para abrir el modal
abrirRuletaBtn.addEventListener('click', () => {
    ruletaModal.style.display = 'block';
});

// Evento para cerrar el modal al hacer clic en la "X"
closeModal.addEventListener('click', () => {
    ruletaModal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === ruletaModal) {
        ruletaModal.style.display = 'none';
    }
});
