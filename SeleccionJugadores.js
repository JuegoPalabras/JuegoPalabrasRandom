/*Declaracion y llamado de variables por medio de ID */

import { angle } from "./NombreJugadores.js";


const btn1player = document.getElementById('optionsMenu-opt1');
const btn2player = document.getElementById('optionsMenu-opt2');
const btn3player = document.getElementById('optionsMenu-opt3');
const btn4player = document.getElementById('optionsMenu-opt4');
const divSelectPlayers = document.getElementById('optionsMenu');
const input1player = document.getElementById('name1');
const input2player = document.getElementById('name2');
const input3player = document.getElementById('name3');
const input4player = document.getElementById('name4');
const divNamePlayers = document.getElementById('playersNames');
const x=document.getElementById('optionsMenuButtons');
const btnJugar=document.getElementById('btnJugar');
const containerJuego=document.getElementById('game')
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player3 = document.getElementById('player3');
const player4 = document.getElementById('player4');
const ExitNamePlayers=document.getElementById('Exit')
const containerplayers=document.getElementById('words-container')
const containerplayer1=document.getElementById('words-box1')
const containerplayer2=document.getElementById('words-box2')
const containerplayer3=document.getElementById('words-box3')
const containerplayer4=document.getElementById('words-box4')
export let action=''

/* Aqui se declaran las acciones de los botones para que cuando sean presionados llenen la variable action con una cadena de texto en especifico */

    btn1player.addEventListener('click', ()=>{

    action='btn1player'   
    
    selectPlayers() }) 


    btn2player.addEventListener('click', ()=>{

    action='btn2player'
    selectPlayers()
    })

    btn3player.addEventListener('click', ()=>{
    action='btn3player'
    selectPlayers()
    })   


    btn4player.addEventListener('click', ()=>{

    action='btn4player'
    selectPlayers()
    })

/*Aqui se encuentra la funcion que ejecutan los eventos anteriormente instanciados la cual se encarga de eliminar los personajes del tablero */
function selectPlayers(){
 
    if (action=='btn1player') { 
        
               player1.style.display='block';
               input1player.style.display='block';
               divSelectPlayers.style.display='none'
               divNamePlayers.style.display='flex'
            containerplayer1.style.display='block'
              

           }else if(action=='btn2player'){
               player1.style.display='block';
               player2.style.display='block';
               input1player.style.display='block';
               input2player.style.display='block';
               divSelectPlayers.style.display='none'
            divNamePlayers.style.display='flex'
                 containerplayer1.style.display='block'
                  containerplayer2.style.display='block'

           }else if (action=='btn3player'){
            player1.style.display='block';
            player2.style.display='block';
            player3.style.display='block';
            input1player.style.display='block';
            input2player.style.display='block';
            input3player.style.display='block';
            divSelectPlayers.style.display='none'
            divNamePlayers.style.display='flex'
            containerplayer1.style.display='block'
            containerplayer2.style.display='block'
            containerplayer3.style.display='block'


           }else if(action=='btn4player'){
            player1.style.display='block';
            player2.style.display='block';
            player3.style.display='block';
            player4.style.display='block';
            input1player.style.display='block';
            input2player.style.display='block';
            input3player.style.display='block';
            input4player.style.display='block';
            divSelectPlayers.style.display='none'
            divNamePlayers.style.display='flex'
            containerplayer1.style.display='block'
            containerplayer2.style.display='block'
            containerplayer3.style.display='block'
            containerplayer4.style.display='block'
           }
}
   
btnJugar.addEventListener('click', () => {
    function isVisible(input) {
        return input.offsetParent !== null;  // Si el input tiene un "offsetParent" no nulo, está visible
    }

    // Función para validar solo los campos visibles
    function validateInputs() {
        if ((isVisible(input1player) && input1player.value === "") ||
            (isVisible(input2player) && input2player.value === "") ||
            (isVisible(input3player) && input3player.value === "") ||
            (isVisible(input4player) && input4player.value === "")) {
            return false; // Si algún campo visible está vacío, no es válido
        }
        return true; // Si todos los campos visibles están completos
    }

    // Validamos los inputs
    if (validateInputs()) {
        divNamePlayers.style.display = 'none';
        containerJuego.style.display = 'block';
        ExitNamePlayers.style.display='none';

    } else {
        alert("Por favor, complete todos los campos visibles.");
    }
});

ExitNamePlayers.addEventListener('click', ()=>{
    divNamePlayers.style.display = 'none';
    divSelectPlayers.style.display='flex'
    x.style.display='grid'
    input1player.style.display='none';
    input2player.style.display='none';
    input3player.style.display='none';
    input4player.style.display='none';
    player1.style.display='none';
    player2.style.display='none';
    player3.style.display='none';
    player4.style.display='none';
    containerplayer1.style.display='none';
    containerplayer2.style.display='none';
    containerplayer3.style.display='none';
    containerplayer4.style.display='none';

})






