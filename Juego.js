const btnAccept=document.getElementById('accept-btn')
const btnRestart=document.getElementById('restart-btn')
const btnPause=document.getElementById('BtnPause')
const btnExitPause=document.getElementById('btn-closePause')
const btnExit=document.getElementById('exit-btn')
const containerplayer1=document.getElementById('words-player1')
const containerplayer2=document.getElementById('words-player2')
const containerplayer3=document.getElementById('words-player3')
const containerplayer4=document.getElementById('words-player4')
const containerPause=document.getElementById('blur')
const inputWordsPrincipal=document.getElementById('word-input')
let numPlayers=0
const containerLetter = document.getElementById('letter');
const play = document.getElementById('btnJugar');
export const numberOfWords1=document.getElementById('numberOfWords1')
export const numberOfWords2=document.getElementById('numberOfWords2')
export const numberOfWords3=document.getElementById('numberOfWords3')
export const numberOfWords4=document.getElementById('numberOfWords4')
import { action } from "./SeleccionJugadores.js"
import { angle } from "/NombreJugadores.js";
import { generarLetraRandom } from "./letras.js";
import { palabras } from "./palabras.js"

document.addEventListener("DOMContentLoaded", function() {
inputWordsPrincipal.addEventListener("input", ()=> {
    inputWordsPrincipal.value = inputWordsPrincipal.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, ""); 
});
});


function validarInput(palabra, letraPermitida) {
    if (!palabra || palabra.trim().length === 0) return false;

    let primeraLetra = palabra.trim().charAt(0).toUpperCase();
    return primeraLetra === letraPermitida.toUpperCase();
}


 // Asegúrate de que todas las palabras estén en minúsculas




let letraPermitida = "";
let palabra

// Evento para generar la letra aleatoria
play.addEventListener('click', () => {
    letraPermitida = generarLetraRandom();
    containerLetter.textContent = `Letra: ${letraPermitida}`;
});


let correct=false
let repeat=false
const WordsWritten=[];
// Evento para validar la palabra ingresada
btnAccept.addEventListener('click', () => {
    palabra = inputWordsPrincipal.value.trim();

    if (palabra === "") {
        alert("Ingrese una palabra");
        return;
    }

    if (!validarInput(palabra, letraPermitida)) {
        alert(`La palabra debe comenzar con la letra "${letraPermitida}"`);
        inputWordsPrincipal.value = "";
        return;
    }

    // Contar las palabras

    const palabrasSet = new Set(palabras.map(palabra => palabra.toLowerCase()));
    console.log("Palabra ingresada:", palabra); // Depuración
    if (palabra === "") {
        console.log("La entrada está vacía.");
        return;
    }

    // Verificar si la palabra está en el Set de palabras
    if (palabrasSet.has(palabra)) {
        console.log(`Encontrado: "${palabra}" coincide con la entrada.`);
        if (WordsWritten.includes(palabra)) {
            console.log("Palabra repetida");
            alert("¡Ya escribiste esta palabra antes!");
            repeat=true
        } else {
            // Si no está repetida, agregarla al array
            WordsWritten.push(palabra);
            console.log("Palabras escritas: ", WordsWritten);
            repeat=false
        }
        correct=true
    } else {
        console.log("La palabra no fue encontrada en el array.");
        correct=false
    } // Llamar a la función para verificar la palabra

    wordCount();
});





// Juego.js
 export let numberWords1 = 0;
 export let numberWords2 = 0;
 export let numberWords3 = 0;
 export let numberWords4 = 0;

 let wordElement1
 let wordElement2
 let wordElement3
 let wordElement4
    function wordCount(){

       if(correct==true && repeat==false){
        if (angle==0) {
            numberWords1+=1
            numberOfWords1.innerText = numberWords1
             wordElement1 = document.createElement("p");
            wordElement1.textContent = "•"+inputWordsPrincipal.value;
            containerplayer1.appendChild(wordElement1);
    
            }else if(angle==90){
                numberWords2+=1
                numberOfWords2.innerText = numberWords2
                 wordElement2 = document.createElement("p");
                wordElement2.textContent = "•"+inputWordsPrincipal.value;
                containerplayer2.appendChild(wordElement2);
            }else if(angle==180){
                numberWords3+=1
                numberOfWords3.innerText =numberWords3
                 wordElement3 = document.createElement("p");
                wordElement3.textContent = "•"+inputWordsPrincipal.value;
                containerplayer3.appendChild(wordElement3);
    
            }else if(angle==270){
                numberWords4+=1
                numberOfWords4.innerText =numberWords4
                
                wordElement4 = document.createElement("p");
                wordElement4.textContent = "•"+inputWordsPrincipal.value;
                containerplayer4.appendChild(wordElement4);
                
            }
           } 
            inputWordsPrincipal.value=''
        
    
    }


    
    
    
    btnRestart.addEventListener('click', ()=>{
    numberWords1 = 0;
    numberWords2 = 0;
    numberWords3 = 0;
    numberWords4 = 0;       

    containerplayer1.innerHTML = '';
    containerplayer2.innerHTML = '';
    containerplayer3.innerHTML = '';
    containerplayer4.innerHTML = '';
         
    containerLetter.innerHTML='';
    letraPermitida="";

    letraPermitida = generarLetraRandom();
    containerLetter.textContent = `Letra: ${letraPermitida}`;
    displayNonePause()

    
    })
    

    const stylePause = () => {
        containerPause.style.display = 'flex';
        setTimeout(() => {
            containerPause.style.opacity = 1;
        }, 10);
    };  
    
     const displayNonePause = () => {
        containerPause.style.display = 'none';
        setTimeout(() => {
            containerPause.style.opacity = 0;
        });
    };
    btnPause.addEventListener('click',stylePause )
    btnExitPause.addEventListener('click',displayNonePause )
    btnExit.addEventListener('click', ()=>{
        window.location.reload()
    })

    
    

    
    

    