// Solicita al usuario tres links de imagenes
// Crear tres card con las imagenes solicitadas

// https://tinyurl.com/28rleln4
// https://tinyurl.com/28rleln4
// https://tinyurl.com/28rleln4

let app = document.getElementById('app');
console.log(app)
let galeria = [];


function crearCard(url){
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let imagen = document.createElement('img');
    imagen.setAttribute('class', 'img-responsive');
    imagen.setAttribute('src', url);
    imagen.setAttribute('alt', 'Gatito y Perrito');

    card.appendChild( imagen );
    console.log(card, imagen);
    app.appendChild(card);
}


for (let i = 1; i <= 3; i++) {
    let url = prompt('Ingrese la URL de la imagen');
    //Agregarlas a "galería".
    galeria.push(url);
    //Cada URL se pasa como argumento a "crearCard"
    crearCard(url);
}