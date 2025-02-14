const inputPlayer1 = document.getElementById('name1');
const inputPlayer2 = document.getElementById('name2');
const inputPlayer3 = document.getElementById('name3');
const inputPlayer4 = document.getElementById('name4');

const h2Player1 = document.getElementById('nmPlayer1');
const h2Player2 = document.getElementById('nmPlayer2');
const h2Player3 = document.getElementById('nmPlayer3');
const h2Player4 = document.getElementById('nmPlayer4');

const button = document.getElementById('btnJugar');

function startClock() {
    const hand = document.getElementById("hand");
    const clock = document.getElementById("clock"); // Asegúrate de que el reloj tenga este ID
    const duration = 60000; // 60 segundo por paso (ajusta según sea necesario)
   export let angle = 0;

    // Colores para cada cuadrante
    const colors = ['blue', 'white', 'green', 'red'];

    function update() {
        if (angle >= 360) {

            clearInterval(clockInterval);
            
            Swal.fire({
                title: "¡Felicidades!",
                text: "Acertaste palabras",
                imageUrl: "https://unsplash.it/400/200",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "ganador"
            });
// Reinicia el ángulo después de una vuelta completa
        }

        angle += 90; // Mover 90 grados cada paso
        hand.style.transition = `transform ${duration}ms linear`;
        hand.style.transform = `rotate(${angle}deg)`;

        // Cambiar el color en función de la posición
        const colorIndex = Math.floor(angle / 90);
        hand.style.backgroundColor = colors[colorIndex];

        // Si quieres cambiar el color del reloj también
        clock.style.backgroundColor = colors[colorIndex];
    }

    const clockInterval = setInterval(update, duration);
}

button.addEventListener('click', function () {
    h2Player1.innerHTML = inputPlayer1.value; 
    h2Player2.innerHTML = inputPlayer2.value;
    h2Player3.innerHTML = inputPlayer3.value;
    h2Player4.innerHTML = inputPlayer4.value;
st
    startClock();

});

