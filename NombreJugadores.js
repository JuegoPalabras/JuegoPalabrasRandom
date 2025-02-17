export let angle = 0;


import { numberOfWords1, numberOfWords2, numberOfWords3, numberOfWords4 } from "./Juego.js";
import { numberWords1, numberWords2, numberWords3, numberWords4 } from "./Juego.js";
import { generarLetraRandom } from "./letras.js";
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


const containerLetter = document.getElementById('letter');

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




function alertWin(jugador, numberWords){
    Swal.fire({
        title:"¡Felicidades! Jugador "+jugador, 
        text:"Acertaste " + numberWords + " palabras",
        imageUrl: "assets/img/trofeo.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "ganador"
    });
}
function winnerCondition(numberWords1, numberWords2, numberWords3, numberWords4) {
    let ganador = null;
    let maxWords = 0;

    if (action === 'btn1player' && angle === 90) {
        maxWords = numberWords1;
        ganador = 1;
    } else if (action === 'btn2player' && angle === 180) {
        maxWords = Math.max(numberWords1, numberWords2);
        if (maxWords === numberWords1) {
            ganador = 1;
        } else if (maxWords === numberWords2) {
            ganador = 2;
        }
    } else if (action === 'btn3player' && angle === 270) {
        maxWords = Math.max(numberWords1, numberWords2, numberWords3);
        if (maxWords === numberWords1) {
            ganador = 1;
        } else if (maxWords === numberWords2) {
            ganador = 2;
        } else if (maxWords === numberWords3) {
            ganador = 3;
        }
    } else if (action === 'btn4player' && angle === 360) {
        maxWords = Math.max(numberWords1, numberWords2, numberWords3, numberWords4);
        if (maxWords === numberWords1) {
            ganador = 1;
        } else if (maxWords === numberWords2) {
            ganador = 2;
        } else if (maxWords === numberWords3) {
            ganador = 3;
        } else if (maxWords === numberWords4) {
            ganador = 4;
        }
    }

    if (ganador !== null) {
        alertWin(ganador, maxWords);  // Mostrar la alerta con el ganador
    }
}





const colors = ['yellow', 'blue', 'red', 'green', 'white'];
const Finalcolors = ['yellow', 'blue', 'red', 'green', 'white'];
function startClock() {
    function update() { 
        angle += 90; // Mover 90 grados cada paso

        // Verificar si se debe detener la aguja
        if (action === 'btn1player' && angle === 90) {
            hand.style.animationPlayState = "paused"; // Pausar animación
            winnerCondition(numberWords1,numberWords2,numberWords3,numberWords4)
            clearInterval(clockInterval); // Detener el setInterval para que no siga actualizando
           
            return; // Salir de la función para evitar que se siga ejecutando
        }
        else if (action === 'btn2player' && angle === 180) {
            hand.style.animationPlayState = "paused"; // Pausar animación
            winnerCondition(numberWords1,numberWords2,numberWords3,numberWords4)
            clearInterval(clockInterval); // Detener el setInterval para que no siga actualizando
            
            return; // Salir de la función para evitar que se siga ejecutando
        }
        else if (action === 'btn3player' && angle === 270) {
            hand.style.animationPlayState = "paused"; // Pausar animación
            clearInterval(clockInterval); // Detener el setInterval para que no siga actualizando
            winnerCondition(numberWords1,numberWords2,numberWords3,numberWords4)
            
            return; // Salir de la función para evitar que se siga ejecutando
        } else if (action === 'btn4player' && angle === 360) {
            hand.style.animationPlayState = "paused"; // Pausar animación
            clearInterval(clockInterval); // Detener el setInterval para que no siga actualizando
            winnerCondition(numberWords1,numberWords2,numberWords3,numberWords4)
            
            return; // Salir de la función para evitar que se siga ejecutando
        }

        // Continuamos la rotación de la manecilla
        hand.style.transition = `transform ${duration}ms linear`;
        hand.style.transform = `rotate(${angle}deg)`;

        // Cambiar el color en función de la posición
        const colorIndex = Math.floor(angle / 90);
        hand.style.backgroundColor = colors[colorIndex];

        // Si quieres cambiar el color del reloj también
        clock.style.backgroundColor = colors[colorIndex];
    }

    // Iniciamos el ciclo de la animación
    clockInterval = setInterval(update, duration);
    
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

    let countdown = 3;
    let timerInterval;

    Swal.fire({
        title: "TYPE WORD",
        html: `
          <video width="300px" height="200px" autoplay loop muted>
            <source src="assets/img/cargador.mp4" type="video/mp4">
            Tu navegador no soporta el video.
          </video>
          <br>
          <p><b>El juego comienza en <span id="countdown">${countdown}</span></b></p>
        `,
        timer: 3000,
        showConfirmButton: false,
        didOpen: () => {
          const countdownElement = document.getElementById("countdown");
          timerInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
      
            if (countdown <= 0) {
              clearInterval(timerInterval);
              Swal.close();
            }
          }, 1000);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("El alerta se cerró automáticamente");
        }
      });

      
        startClock();  // Llama a la función startClock después de 3 segundos
      
});


let clockInterval; // Definir clockInterval globalmente para que se pueda detener o reiniciar cuando sea necesario

btnReload.addEventListener('click', () => {
    angle = 0;
    // Reiniciamos el ángulo y la acción
    const hand = document.getElementById("hand");

    // Eliminamos cualquier animación anterior y aseguramos que la manecilla vuelve a la posición inicial
    hand.style.animation = 'none'; // Eliminar la animación anterior
    hand.style.transform = `rotate(0deg)`; // Asegurarnos de que la manecilla empieza en la posición inicial

    // Hacemos un "reflow" para reiniciar la animación
    hand.offsetHeight; // Esto provoca el reflow

    // Establecemos nuevamente la animación
    hand.style.animation = 'rotate 360s linear infinite'; // Continuar la animación (con "infinite" para que siga girando)

    // Establecemos el color de la manecilla y el reloj en la posición inicial
    const colorIndex = Math.floor(angle / 90);
    hand.style.backgroundColor = colors[colorIndex];

    // Reiniciar el ángulo
   

    // Limpiar los contadores
    numberOfWords1.innerText = "";
    numberOfWords2.innerText = "";
    numberOfWords3.innerText = "";
    numberOfWords4.innerText = "";

    // Asignamos nuevamente los nombres a los elementos de la interfaz
    h2Player1.innerHTML = player1Name;
    h2Player2.innerHTML = player2Name;
    h2Player3.innerHTML = player3Name;
    h2Player4.innerHTML = player4Name;

    let countdown = 3;
    let timerInterval;

    Swal.fire({
        title: "TYPE WORD",
        html: `
          <video width="300px" height="200px" autoplay loop muted>
            <source src="assets/img/cargador.mp4" type="video/mp4">
            Tu navegador no soporta el video.
          </video>
          <br>
          <p><b>El juego comienza en <span id="countdown">${countdown}</span></b></p>
        `,
        timer: 3000,
        showConfirmButton: false,
        didOpen: () => {
          const countdownElement = document.getElementById("countdown");
          timerInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
      
            if (countdown <= 0) {
              clearInterval(timerInterval);
              Swal.close();
            }
          }, 1000);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("El alerta se cerró automáticamente");
        }
      });

    // Reiniciar el reloj
    clearInterval(clockInterval); // Detenemos cualquier intervalo anterior

    // Establecer el ciclo para el reloj, comenzando la animación desde el ángulo 0
    startClock(); // Llamamos a startClock para continuar el ciclo de la manecilla
    
});

