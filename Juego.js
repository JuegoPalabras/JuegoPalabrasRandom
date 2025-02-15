const btnAccept=document.getElementById('accept-btn')
const btnRestart=document.getElementById('restart-btn')
// const containerplayer1=document.getElementById('words-box1')
// const containerplayer2=document.getElementById('words-box2')
// const containerplayer3=document.getElementById('words-box3')
// const containerplayer4=document.getElementById('words-box4')
const inputWordsPrincipal=document.getElementById('word-input')
export const numberOfWords1=document.getElementById('numberOfWords1')
export const numberOfWords2=document.getElementById('numberOfWords2')
export const numberOfWords3=document.getElementById('numberOfWords3')
export const numberOfWords4=document.getElementById('numberOfWords4')

import { angle } from "/NombreJugadores.js";

import {btnReload} from "/NombreJugadores.js"

btnAccept.addEventListener('click', ()=>{
    if (inputWordsPrincipal!=null) {
    wordCount()
    }else{
        alert("Ingrese una palabra")
    }
})
// Juego.js
 let numberWords1 = 0;
 let numberWords2 = 0;
 let numberWords3 = 0;
 let numberWords4 = 0;



    
    function wordCount(){

        if (angle==0) {
            numberWords1+=1
    
        numberOfWords1.textContent=numberWords1
        }else if(angle==90){
            numberWords2+=1
            numberOfWords2.textContent=numberWords2
        }else if(angle==180){
            numberWords3+=1
            numberOfWords3.textContent=numberWords3
        }else if(angle==270){
            numberWords4+=1
            numberOfWords4.textContent=numberWords4
        }
        
    
    }
    btnReload.addEventListener('click', ()=>{
    numberWords1 = 0;
    numberWords2 = 0;
    numberWords3 = 0;
    numberWords4 = 0;
    })