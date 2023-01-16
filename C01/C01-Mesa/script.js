/* Realizar un script que permita sumar un array de números consecutivamente, de forma que se sume el primer número con el segundo y lo imprima por consola. 
Luego, tenemos que tomar este resultado y sumarle el tercer numero, y asi hasta terminar de recorrer el array: */

let array = [1, 2, 4, 8];
let sumatoria = 0;

for (let i = 0; i < array.length; i++) {
    sumatoria += array[i];
    console.log(sumatoria);
}