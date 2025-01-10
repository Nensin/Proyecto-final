const ruleta = document.querySelector('.Circulo');
const boton = document.querySelector('#girarbtn');

let anguloActual = 0;

boton.addEventListener('click', () => {
    const giroExtra = Math.floor(Math.random() * 360);
    const vueltas = 5;
    anguloActual += vueltas * 360 +giroExtra;


    ruleta.style.transform = `rotate(${anguloActual}deg)`;

    setTimeout(() => {
const sectorGanador = Math.floor(((anguloActual % 360) / 45)) + 1;          alert(`¡El sector ganador es: ${sectorGanador}!`);
}, 5000);
    });