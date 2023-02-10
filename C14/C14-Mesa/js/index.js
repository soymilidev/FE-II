/*
REQUERIMIENTOS
- Utilizar el formulario para captar el texto ingresado
- Implementar el evento "submit", utilizarlo para guardar el comentario en un array
- Cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del HTML los hardcodeados y hacerlo dinámico)
- Constantemente guardar la información en localStorage, si se recarga la página deberían mantenerse los comentarios
*/


const form = document.querySelector("form");
const comentarios = document.querySelector(".comentarios-box");

//Espacio para almacenar los comentarios.
let listaComentarios = [];

//Comprobar si hay algún valor guardado en el almacenamiento local.
//getItem --> devuelve el valor de la clave cuyo nombre se le pasa por parámetro
if (localStorage.getItem("claveComentarios")) {
    //Si hay algún valor guardado en el almacenamiento local, se carga en "listaComentarios" usando JSON.parse().
    listaComentarios = JSON.parse(localStorage.getItem("claveComentarios"));
    //Mostrar los comentarios guardados en la página
    renderizarComentarios();
}


form.addEventListener("submit", function(event) {
    //Cuando se envía un nuevo comentario (se previene su envío) se agrega al final de la lista de comentarios.
    event.preventDefault();
    const comentario = document.querySelector("#comentario-input").value;
    listaComentarios.push(comentario);
    //Mostrar el nuevo comentario
    renderizarComentarios();
    localStorage.setItem("claveComentarios", JSON.stringify(listaComentarios));
});

//Mostrar todos los comentarios, recorrer la lista de coment. y crear un p para c/u
//Luego, se guarda la lista actualizada de comentarios en el almacenamiento local.
function renderizarComentarios() {
    comentarios.innerHTML = "";
    listaComentarios.forEach(function(comentario) {
        const p = document.createElement("p");
        p.textContent = comentario;
        comentarios.appendChild(p);
    });
}