// https://tinyurl.com/28rleln4

let app = document.getElementById('app');
console.log(app)
let galeria = [];


function crearCard(url){
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    //Etapa 1
    let link = document.createElement('a');
    link.setAttribute('class', 'img-responsive');
    link.setAttribute('href', url);

    let imagen = document.createElement('img');
    imagen.setAttribute('class', 'img-responsive');
    imagen.setAttribute('src', url);
    imagen.setAttribute('alt', 'Gatito y Perrito');

    link.appendChild(imagen);
    card.appendChild(link);

    console.log(card, link, imagen);
    app.appendChild(card);
}


for (let i = 1; i <= 3; i++) {
    let url = prompt('Ingrese la URL de la imagen');
    //Etapa 2
    let href = prompt('Ingrese el href de la imagen');
    //Agregarlas a "galería".
    galeria.push(url);
    //Cada URL se pasa como argumento a "crearCard"
    //Etapa 2
    crearCard(url, href);
}


/* 
ETAPA 3
-Nodo padre: "app" (id "app")
-Nodo hijo repetitivo: "card" (class "card")
-Explicación: Podemos utilizar template literals para crear el nodo "card" y su contenido (img). 

Por ejemplo: 
function crearCard(url){
const card = `
<div class="card">
    <a class="img-responsive" href="${url}">
    <img class="img-responsive" src="${url}" alt="Gatito y Perrito">
    </a>
</div>
`;
//insertAdjacentHTML es un método en JavaScript que permite insertar HTML como texto en un elemento HTML existente. 
//beforeend --> se insertará el HTML antes del final del elemento con id "app"
app.insertAdjacentHTML('beforeend', card);
}
*/