/* -------------------------------------------------------------------------- */
/*                          la familia de los felinos                         */
/* -------------------------------------------------------------------------- */
// 1. Crear el nodo.
let titulo = document.createElement('h1');
titulo.innerText = 'La familia de los felinos';

// 2. Seleccionar el padre
let header = document.querySelector('.header'); //titulo.textContent = 'La familia de los felinos';

// 3. Agregar el nodo al padre
header.appendChild( titulo );



/* -------------------------------------------------------------------------- */
/*                                    button                                  */
/* -------------------------------------------------------------------------- */
// 1. Crear el nodo.
let button = document.createElement('button');
button.className = 'btn-modo';
button.textContent = 'Activar modo';

// 2. Seleccionar el padre
let body2 = document.querySelector('.btn-container'); //titulo.textContent = 'La familia de los felinos';

// 3. Agregar el nodo al padre
body2.appendChild( button );



/* -------------------------------------------------------------------------- */
/*                            button - activar modo                           */
/* -------------------------------------------------------------------------- */

/* document.querySelector("button").onclick = () =>{
    document.querySelector("body").classList.toggle("dark");
} */

const switcher = document.querySelector('.btn-modo');
console.log(switcher);

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    

    let className = document.body.className;
    if (className == "light") {
        this.textContent = "Modo claro";
    }
    else {
        this.textContent = "Modo oscuro";
    }
});



/* -------------------------------------------------------------------------- */
/*                                    cards                                   */
/* -------------------------------------------------------------------------- */
const contenedor = document.querySelector(".contenedor")

let animales = [

    {
    id: 1,
    foto: "./img/tiger.jpg",
    nombre:"El tigre",
    descripcion: "El tigre (Panthera tigris) es una de las especies de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño."
    },

    {
    id: 2,
    foto: "./img/leon.jpg",
    nombre: "El leon",
    descripcion: "El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India"
    },

    {
    id: 3,
    foto: "./img/leopardo.jpg",
    nombre: "El leopardo",
    descripcion: "El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico)."
    },

    {
    id: 4,
    foto: "./img/chita.jpg",
    nombre: "El guepardo",
    descripcion:"El guepardo o chita (Acinonyx jubatus) es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros."
    },

    {
    id: 5,
    foto: "./img/pantera-negra.jpg",
    nombre: "La pantera negra",
    descripcion: "La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales."
    },

    {
    id: 6,
    foto: "./img/jaguar.jpg",
    nombre: "El jaguar",
    descripcion: "El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo)."
    },
    ]

function crearCard (animal,contenedor){

let card = document.createElement('div')
let foto = document.createElement('img')
let nombre = document.createElement('h2')
let descripcion = document.createElement('p')


foto.setAttribute('src', animal.foto);
nombre.innerText = animal.nombre;
descripcion.innerText = animal.descripcion;  

card.setAttribute('class', 'item');

card.append(foto, nombre, descripcion)

contenedor.appendChild(card)
}

/* card.appendChild(img)
card.appendChild(titulo)
card.appendChild(contenido)
contenedor.appendChild(card); */


for (const animal of animales) {
    crearCard( animal, contenedor )
}