
/* //INPUT nombre
  const nameInput = document.getElementById("name");
  const errorMessage = document.querySelector(".error-message");
  
  nameInput.addEventListener("input", function() {
    //Eliminar mensaje de error
    errorMessage.innerHTML = "";
    errorMessage.style.color = "red";
  
    //Validar el input de nombre
    //value --> para obtener el valor actual del campo
  if (!nameInput.value) {
    errorMessage.innerHTML = "Por favor, escribí tu nombre.";
  } else if (nameInput.value.length < 2 || nameInput.value.length > 25) {
    errorMessage.innerHTML = `El nombre debe tener un mínimo 2 caracteres y un máximo 25; ingresaste ${nameInput.value.length}.`;
  } else if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
    errorMessage.innerHTML = "El valor introducido debe ser un nombre (letras y espacios solamente)";
  }
  });
  
  form.addEventListener("submit", function(event) {
    if (errorMessage.innerHTML) {
      event.preventDefault();
    }
  }); */


const nameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");
const passwordInput = document.getElementById("password");
const termsInput = document.getElementById("terms");
const errorMessage = document.querySelectorAll(".error-message");
const form = document.querySelector("form");

nameInput.addEventListener("input", function() {
  //Eliminar mensaje de error
  errorMessage[0].innerHTML = "";
  errorMessage[0].style.color = "red";

  //Validar el input de nombre
  if (!nameInput.value) {
    errorMessage[0].innerHTML = "Por favor, escribí tu nombre.";
  } else if (nameInput.value.length < 2 || nameInput.value.length > 25) {
    errorMessage[0].innerHTML = `El nombre debe tener un mínimo 2 caracteres y un máximo 25; ingresaste ${nameInput.value.length}.`;
  } else if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
    errorMessage[0].innerHTML = "El valor introducido debe ser un nombre (letras y espacios solamente)";
  }
});

emailInput.addEventListener("input", function() {
  errorMessage[1].innerHTML = "";
  errorMessage[1].style.color = "red";

  if (!emailInput.value) {
    errorMessage[1].innerHTML = "Por favor, escribí tu email.";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    errorMessage[1].innerHTML = "Por favor, escribí un email válido.";
  }
});

passwordInput.addEventListener("input", function() {
  errorMessage[2].innerHTML = "";
  errorMessage[2].style.color = "red";

  if (!passwordInput.value) {
    errorMessage[2].innerHTML = "Por favor, escribí tu contraseña.";
  } else if (passwordInput.value.length < 8 || passwordInput.value.length > 20) {
    errorMessage[2].innerHTML = `La contraseña debe tener entre 8 y 20 caracteres; al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.`;
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordInput.value)) {
  errorMessage[2].innerHTML = "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (@$!%*?&)";
}
});

form.addEventListener("submit", function(event) {
  errorMessage[3].innerHTML = "";
  errorMessage[3].style.color = "red";
  if (!termsInput.checked) {
    errorMessage[3].innerHTML = "Por favor, acepta los términos y condiciones.";
    event.preventDefault();
  }

  for (let i = 0; i < errorMessage.length; i++) {
    if (errorMessage[i].innerHTML) {
      event.preventDefault();
      break;
    }
  }
});