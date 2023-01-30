
//Objetivo: crear cards para objeto en el arreglo "gatitos"
let gatitos = [
{
    id: "1",
    nombre: "Garfield",
    color: "Naranja",
    imgURL: "img/Garfield.jpg",
    edad: 2
},
{
    id: "2",
    nombre: "Lucky",
    color: "Gris y blanco",
    imgURL: "img/Luckyy.jpg",
    edad: 10
},
{
    id: "3",
    nombre: "Snowball",
    color: "Negro",
    imgURL: "img/Snowball.jpg",
    edad: 1
}
]

const contenedor = document.querySelector("main")
console.log(contenedor); //aseguararse de que este OK



function crearCard(gatito, contenedor){
    let card = document.createElement('div');
    let titulo = document.createElement('h2');
    let imagen = document.createElement('img');
    let texto = document.createElement('p');

    titulo.innerText = gatito.nombre;
    imagen.setAttribute('src', gatito.imgURL);
    card.setAttribute('class', 'card'); //agregar clase(atributo), card(valor). Atributos ==> valores que estan dentro de la etiqueta
    texto.innerText = gatito.color;    

    // el metodo append agrega varios nodos (opcional) != appendChild()
    card.append( titulo, imagen, texto );
    //card.appendChild(titulo);
    //card.appendChild(imagen);
    //card.appendChild(texto);

    contenedor.appendChild(card) ;
}

/* 
// Version 1
function crearCard(gatito, contenedor) {
    const card =    `<div id= "${gatito.id}" class="card">
                        <h2> ${gatito.nombre} </h2>
                        
                        <p> ${gatito.color} </p>
                    </div>`
    contenedor.innerHTML += card;
}
*/


for (const gatito of gatitos) { //para cada objeto "gatito" dentro del arreglo "gatitos", ejecutaremos un bloque de código.
    console.log(gatito.color)
    crearCard(gatito, contenedor) 
}


function seleccionar(id) {
    let card = document.getElementById(id)
    card.classList.add("active");
}


function cambiarModo() {
    document.querySelector("body").classList.toggle("dark");
}
// inspeccionar ==> cambiarModo()
//cambiarModo()



//NOTAS
/* 
// 1. Crear el nodo.
let titulo = document.createElement('h2');
titulo.innerText = 'un texto desde JS';

// 2. Seleccionar el padre
let header = document.querySelector('.header');

// 3. Agregar el nodo al padre
header.appendChild( titulo );
 */


/* 
document.querySelector(".header").innerText = "texto 1";
document.querySelector(".header").innerHTML = "texto 2";    //permite agregar las etiquetas
document.querySelector(".header").textContent = "texto 3";  //Es lo mismo que la opción createTextNode (no se visualiza hasta asignarlo  a un elemento existente en el DOM):


// 1. Crear el nodo.
let texto = document.createTextNode("Hello World");

// 2. Seleccionar el padre
let titulo = document.querySelector('.header');

// 3. Agregar el nodo al padre
titulo.appendChild(textNode); 
*/

/* 
let textNode = document.createTextNode("Hello World");
document.body.appendChild(textNode); 
*/