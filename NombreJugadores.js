export let angle = 0;


import { numberOfWords1, numberOfWords2, numberOfWords3, numberOfWords4 } from "./Juego.js";

// Variables para almacenar los nombres de los jugadores
let player1Name = '';
let player2Name = '';
let player3Name = '';
let player4Name = '';

const hand = document.getElementById("hand");

const inputPlayer1 = document.getElementById('name1');
const inputPlayer2 = document.getElementById('name2');
const inputPlayer3 = document.getElementById('name3');
const inputPlayer4 = document.getElementById('name4');

const h2Player1 = document.getElementById('nmPlayer1');
const h2Player2 = document.getElementById('nmPlayer2');
const h2Player3 = document.getElementById('nmPlayer3');
const h2Player4 = document.getElementById('nmPlayer4');

const button = document.getElementById('btnJugar');

const btn1player = document.getElementById('optionsMenu-opt1');
const btn2player = document.getElementById('optionsMenu-opt2');
const btn3player = document.getElementById('optionsMenu-opt3');
const btn4player = document.getElementById('optionsMenu-opt4');

export const btnReload = document.getElementById('restart-btn');

let action = '';
 let duration = 90000;
btn1player.addEventListener('click', () => {
    action = 'btn1player';

});

btn2player.addEventListener('click', () => {
    action = 'btn2player';

});

btn3player.addEventListener('click', () => {
    action = 'btn3player';

});

btn4player.addEventListener('click', () => {
    action = 'btn4player';
});

function startClock() {
    
    const clock = document.getElementById("clock"); // Asegúrate de que el reloj tenga este ID
     // 60 segundo por paso (ajusta según sea necesario)

    // Colores para cada cuadrante
    const colors = ['yellow', 'blue', 'red', 'green', 'white'];

    function update() {
        if (action == 'btn4player' && angle >= 210) {
            clearInterval(clockInterval);

            Swal.fire({
                title: "¡Felicidades!",
                text: "Acertaste palabras",
                imageUrl: "https://unsplash.it/400/200",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "ganador"
            });
        } else if (action == 'btn1player' && angle == 45) {
            clearInterval(clockInterval);
            console.log(angle)
            hand.style.animationPlayState = "paused";
            Swal.fire({
                title: "¡Felicidades!",
                text: "Acertaste palabras",
                imageUrl: "https://unsplash.it/400/200",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "ganador"
            });
        } 

        angle += 90; // Mover 90 grados cada paso
        hand.style.transition = `transform ${duration}ms linear`;
        hand.style.transform = `rotate(${angle}deg)`;

        // Cambiar el color en función de la posición
        const colorIndex = Math.floor(angle / 90);
        hand.style.backgroundColor = colors[colorIndex];

        // Si quieres cambiar el color del reloj también
    }

    const clockInterval = setInterval(update, duration);
}

// Al hacer clic en "Jugar", guardamos los nombres de los jugadores
button.addEventListener('click', function () {
    player1Name = inputPlayer1.value;
    player2Name = inputPlayer2.value;
    player3Name = inputPlayer3.value;
    player4Name = inputPlayer4.value;

    // Asignamos los nombres a los elementos correspondientes
    h2Player1.innerHTML = player1Name;
    h2Player2.innerHTML = player2Name;
    h2Player3.innerHTML = player3Name;
    h2Player4.innerHTML = player4Name;

    startClock();
});

// Al hacer clic en "Recargar", reiniciamos el juego pero conservamos los nombres
btnReload.addEventListener('click', () => {
    // Reiniciamos el ángulo y la acción
    angle = 0;
    action = '';
    numberOfWords1.innerText="";
    numberOfWords2.innerText="";
    numberOfWords3.innerText="";
    numberOfWords4.innerText="";
    // Asignamos nuevamente los nombres a los elementos de la interfaz
    h2Player1.innerHTML = player1Name;
    h2Player2.innerHTML = player2Name;
    h2Player3.innerHTML = player3Name;
    h2Player4.innerHTML = player4Name;

    // Reiniciar la animación
    const hand = document.getElementById("hand");
    hand.style.animation = 'none'; // Eliminar la animación
    hand.offsetHeight; // Forzar la reflow del DOM
    hand.style.animation = `rotate ${duration}ms linear forwards`; // Volver a aplicar la animación

    // Reiniciar el reloj
    startClock();
});
