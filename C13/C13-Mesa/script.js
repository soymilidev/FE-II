//NOMBRE
const nameInput = document.getElementById("nombre");
const errorMessage = nameInput.nextElementSibling;
//nextElementSibling --> devuelve el siguiente elemento HTMl (hermano) --> errorMessage
const button = document.querySelector(".button");

//se ejecuta c/ vez que se realiza un cambio
nameInput.addEventListener("input", function() {
  //eliminar los espacios del principio y final
  const name = nameInput.value.trim();
  //separar en diferentes partes a partir de el espacio " "
  const nameWords = name.split(" ");

  if (nameWords.length < 2) {
    errorMessage.textContent = "El nombre debe tener al menos dos palabras.";
    nameInput.classList.add("borderError");
    button.disabled = true;
    return;
  }

//recorrer cada una de las palabras, "word" representa la palabra actual
  for (const word of nameWords) {
    if (word.length <= 1) {
      errorMessage.textContent = "Cada palabra debe tener más de 1 letra.";
      nameInput.classList.add("borderError");
      button.disabled = true;
      return;
    }

//expresión regular /\d/ para verificar si la palabra contiene algún número
    if (/\d/.test(word)) {
      errorMessage.textContent = "El nombre no debe contener números.";
      nameInput.classList.add("borderError");
      button.disabled = true;
      return;
    }
  }

  if (name.length > 150) {
    errorMessage.textContent = "El nombre no puede superar los 150 caracteres.";
    nameInput.classList.add("borderError");
    button.disabled = true;
    return;
} 
  errorMessage.textContent = "";
  nameInput.classList.remove("borderError");
  button.disabled = false;
});



//PASSWORD



//TEL



//HOBBIES
//seleccionar todos los checkboxes
const hobbies = document.querySelectorAll('input[type="checkbox"]');

button.addEventListener('click', function(event) {
//recorrer la lista de hobbies y contar cuántos están seleccionados. 
  let selectedHobbies = 0;
//guardar una lista de los ID de los hobbies seleccionados en "selectedHobbiesArray"
  let selectedHobbiesArray = [];

//cada hobbie tiene una propiedad checked y una propiedad id
  hobbies.forEach(hobby => {
    if (hobby.checked) {
      selectedHobbies++;
      selectedHobbiesArray.push(hobby.id);
    }
  });

  if (selectedHobbies > 4) {
    alert("Solo se pueden seleccionar hasta 4 hobbies");
    event.preventDefault();
  } else if (selectedHobbiesArray.includes("hobbiesVideoJuegos") && selectedHobbiesArray.includes("hobbiesCocina")) {
    alert("No se permite la combinacion de Videojuegos con Cocina");
    event.preventDefault();
  } else if (selectedHobbiesArray.includes("hobbiesGuitarra") && selectedHobbiesArray.includes("Lectura")) {
    alert("No se permite la combinacion de Guitarra con Lectura");
    event.preventDefault();
  } else if (selectedHobbiesArray.includes("hobbiesNetflix") && selectedHobbiesArray.includes("hobbiesTejer")) {
    alert("No se permite la combinacion de Netflix con Tejer");
    event.preventDefault();
  }
});



//NACIONALIDADES
const form = document.querySelector("form");
const paisFieldset = document.querySelector(".pais");
const nacionalidades = paisFieldset.querySelectorAll("input[type=radio]");

form.addEventListener("submit", function(event) {
  let nacionalidadSeleccionada = false;
  
  nacionalidades.forEach(nacionalidad => {
    if (nacionalidad.checked) {
      nacionalidadSeleccionada = true;
    }
  });

  if (!nacionalidadSeleccionada) {
    event.preventDefault();
    alert("El campo país es obligatorio");
  }

  if (nacionalidades[0].checked) {
    event.preventDefault();
    alert("Lo sentimos, aún no estamos reclutando magos en Argentina, pero pronto llegaremos");
  }
});