const prompt = require("prompt-sync")({ sigint: true });

/* 
Tragamonedas
Crear una función que reciba un número que será la cantidad de aciertos del usuario sobre el total de casillas disponibles. 
La función deberá devolver el monto del premio, el cual es proporcional al número de aciertos.
 */


const premioTotal = 2500;
const casilla = 10;

function calcular(aciertos) {
    // Porcentaje de aciertos del usuario
    const porcentajeAcierto = aciertos / casilla;
    // Premio x porcentaje de aciertos
    const premio = premioTotal * porcentajeAcierto;
    return premio;
}

console.log("Premio: $" + calcular(8) + "\n");



/* Lotería
Crear un programa que consista en una apuesta donde el usuario tenga que ingresar un objeto o lugar con el que soñó ese día, 
para que luego lo muestre en pantalla y se calcule aleatoriamente un resultado numérico con 4 posibles casos de premios que pueda ganar: 
si el resultado es 0, gana $1000, si es 1, gana $10000; si es 2 gana $10000, y si es 3 gana $100000. 
*/

function resultadoLoteria() {
    const sueno = prompt("Ingresa el objeto o lugar con el que soñaste hoy: ");
    console.log("Hoy soñaste con el objeto/lugar: " + sueno);

    // Generar un número aleatorio entre 0 y 3
    const resultado = Math.floor(Math.random() * 4);
    let premio;
    switch (resultado) {
        case 0:
            premio = 1000;
            break;
        case 1:
        case 2:
            premio = 10000;
            break;
        case 3:
            premio = 100000;
            break;
    }
    console.log("Ganaste: $" + premio + "\n");
}

resultadoLoteria();



/* Ruleta
Crear una función que sortee un numero random ganador, luego haga un ciclo desde 1 hasta el final de la ruleta, imprimiendo por consola el número de esa iteración. 
Pero en el caso del número que sea el ganador, imprimir por consola “Numero ganador:” seguido del número.
*/


const finalRuleta = 25;

function tirarRuleta() {
    // Generar un número aleatorio entre 1 y finalRuleta
    const numeroGanador = Math.floor(Math.random() * finalRuleta) + 1;

    for (let i = 1; i <= finalRuleta; i++) {
    // Si el número es igual al número ganador
    if (i === numeroGanador) {
        console.log("Número ganador: " + i);
    } else {
        console.log(i);
    }
}
}

tirarRuleta();