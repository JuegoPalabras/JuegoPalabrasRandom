/*Declaracion y llamado de variables por medio de ID */

const btn1player=document.getElementById(optionsMenu-opt1)
const btn2player=document.getElementById(optionsMenu-opt2)
const btn3player=document.getElementById(optionsMenu-opt3)
const btn4player=document.getElementById(optionsMenu-opt4)
const input1player=document.getElementById(name1)
const input2player=document.getElementById(name2)
const input3player=document.getElementById(name3)
const input4player=document.getElementById(name4)
const player1=x
const player2=x
const player3=x
const player4=x
let action=''

/* Aqui se declaran las acciones de los botones para que cuando sean presionados llenen la variable action con una cadena de texto en especifico */

    btn1player.addEventListener('click', ()=>{

    action='btn1player'()    selectPlayers())
    



    btn2player.addEventListener('click', ()=>{

    action='btn2player'
    selectPlayers()
    })
f
    btn3player.addEventListener('click', ()=>{
    action='btn3player'
    selectPlayers()
    })   


    btn4player.addEventListener('click', ()=>{

    action='btn4player'
    selectPlayers()
    })

/*Aqui se encuentra la funcion que ejecutan los eventos anteriormente instanciados la cual se encarga de eliminar los personajes del tablero */
unction selecciotPlayers
    
    if (btnaction=='btn1player'
        
 player2.style.display=none;
        player3.style.display=none;
        player4.style.display=none;
        input2player.style.display=none;
        input3player.style.display=none;
        input4player.style.display=none;
    }else if(action='btn2player'){
        player3.style.display=none;
        player4.style.display=none;
        input3player.style.display=none;
        input4player.style.display=none;
    }else if (action='btn3player'){
        player4.style.display=none;
        input4player.style.display=none;

    }