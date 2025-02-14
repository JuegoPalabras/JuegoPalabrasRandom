const containerletter= document.getElementById('letter');
const play=document.getElementById('btnJugar');

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let random = Math.floor(Math.random()*27)

play.addEventListener('click',()=>{
containerletter.textContent=`Letra: ${letras[random]}`
})



