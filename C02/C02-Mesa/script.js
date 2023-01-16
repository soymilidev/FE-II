const prompt = require("prompt-sync")({ sigint: true });

/* 
Programaremos un pequeño juego interactivo de piedra, papel o tijera. 
El usuario podrá elegir entre una de las 3 opciones y la computadora elegirá al azar otra de las 3 opciones, 
entonces, se mostrará si ganó o perdió. Para realizar esta actividad recordemos las reglas de este juego:
- Piedra gana contra tijera.
- Tijera gana contra papel.
- Papel gana contra piedra
.toLowerCase()
*/


let piedra = 1;
let papel = 2;
let tijera = 3;

let nombreUsuario = prompt("Ingresa tu nombre ");
let opcionUsuario = parseInt(prompt("Ingresa tu opción: 1=Piedra, 2=Papel, 3=Tijera "));

let opcionMaquina = Math.round( Math.random() * (3 -  1) + 1 );
// let numeroRandom = Math.random()*(max - min)+min;

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        console.log("¡Empate!");
    }
    else if(opcionMaquina == papel)
    {
        console.log("Ganó la máquina");
    }
    else if(opcionMaquina == tijera)
    {
        console.log("Ganó " + nombreUsuario);
    }else{
        console.log("El parámetro ingresado en inválido");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        console.log("Ganó " + nombreUsuario);
    }
    else if(opcionMaquina == papel)
    {
        console.log("¡Empate!");
    }
    else if(opcionMaquina == tijera)
    {
        console.log("Ganó la máquina");
    }
    else{
        console.log("El parámetro ingresado en inválido");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        console.log("Ganó la máquina");
    }
    else if(opcionMaquina == papel)
    {
        console.log("Ganó " + nombreUsuario);
    }
    else if(opcionMaquina == tijera)
    {
        console.log("¡Empate!");
    }
    else{
        console.log("El parámetro ingresado en inválido");
    }
}

let nombreOpcionMaquina ='';
switch(opcionMaquina)
{
    case 1:
        nombreOpcionMaquina='piedra';
    break;  
    case 2:
        nombreOpcionMaquina='papel';
    break;  
    case 3:
        nombreOpcionMaquina='tijera';
    break;  
}

let nombreOpcionUsuario='';
switch(opcionUsuario)
{
    case 1:
        nombreOpcionUsuario='piedra';
    break;  
    case 2:
        nombreOpcionUsuario='papel';
    break;  
    case 3:
        nombreOpcionUsuario='tijera';
    break;  
}


console.log("La opción de " +  nombreUsuario + " fue " + nombreOpcionUsuario);
console.log("La opción de la máquina fue " + nombreOpcionMaquina);