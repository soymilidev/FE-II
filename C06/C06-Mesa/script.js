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
    descripcion: "El tigre (Panthera tigris) es una de las especies de la subfamilia de los panterinos (familia Felidae) pertenecientes al g??nero Panthera. Se encuentra solamente en el continente asi??tico; es un predador carn??voro y es la especie de f??lido m??s grande del mundo junto con el le??n pudiendo alcanzar ambos un tama??o comparable al de los f??siles de f??lidos de mayor tama??o."
    },

    {
    id: 2,
    foto: "./img/leon.jpg",
    nombre: "El leon",
    descripcion: "El le??n (Panthera leo) es un mam??fero carn??voro de la familia de los f??lidos y una de las cinco especies del g??nero Panthera. Los leones salvajes viven en poblaciones cada vez m??s dispersas y fragmentadas del ??frica subsahariana (a excepci??n de las regiones selv??ticas de la costa del Atl??ntico y la cuenca del Congo) y una peque??a zona del noroeste de India"
    },

    {
    id: 3,
    foto: "./img/leopardo.jpg",
    nombre: "El leopardo",
    descripcion: "El leopardo (Panthera pardus) es un mam??fero carn??voro de familia de los f??lidos. Al igual que tres de los dem??s f??lidos del g??nero Panthera: el le??n, el tigre y el jaguar, est??n caracterizados por una modificaci??n en el hueso hioides que les permite rugir. Tambi??n se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (mel??nico)."
    },

    {
    id: 4,
    foto: "./img/chita.jpg",
    nombre: "El guepardo",
    descripcion:"El guepardo o chita (Acinonyx jubatus) es un miembro at??pico de la familia de los f??lidos. Es el ??nico representante vivo del g??nero Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre m??s veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros."
    },

    {
    id: 5,
    foto: "./img/pantera-negra.jpg",
    nombre: "La pantera negra",
    descripcion: "La pantera negra es una variaci??n negra (melanismo) de varias especies de grandes f??lidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variaci??n negra de estos animales."
    },

    {
    id: 6,
    foto: "./img/jaguar.jpg",
    nombre: "El jaguar",
    descripcion: "El jaguar, yaguar o yaguaret?? (Panthera onca) es un carn??voro f??lido de la subfamilia de los Panterinos y g??nero Panthera. Es la ??nica de las cinco especies actuales de este g??nero que se encuentra en Am??rica. Tambi??n es el mayor f??lido de Am??rica y el tercero del mundo, despu??s del tigre (Panthera tigris) y el le??n (Panthera leo)."
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