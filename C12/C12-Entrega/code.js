/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
//almacenar info de la persona
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

//listado de materias
const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

//cada boton tiene  un evento de escucha para que al hacer clic, se ejecute una función
const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

//solicitar datos...
function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let inputNombre = prompt("Ingresa tu nombre");
  let inputAnioNacimiento = parseInt(prompt("Ingresa el año en que naciste"));
  let inputCiudad = prompt("Ingresa la ciudad donde vives");
  let interesPorJs = confirm("¿Te interesa JavaScript?")
  let calcularAnioActual = new Date().getFullYear();

  datosPersona.nombre = inputNombre;
  datosPersona.edad = calcularAnioActual - inputAnioNacimiento;
  datosPersona.ciudad = inputCiudad;
  datosPersona.interesPorJs = interesPorJs ? "Si" : "No"
    return datosPersona;
}

//mostrar los datos del usuario, obtenidos a través de function obtenerDatosDelUsuario()
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector("#nombre").innerText = datosPersona.nombre;
  document.querySelector("#edad").innerText = datosPersona.edad;
  document.querySelector("#ciudad").innerText = datosPersona.ciudad;
  document.querySelector("#javascript").innerText = datosPersona.interesPorJs;
}

//mostrar tarjetas
//recorrer listado y para c/u crear una tarjeta
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let materiasDeFrontend = document.querySelector("#fila");
  materiasDeFrontend.innerHTML = "";
  listado.forEach( card => {
    materiasDeFrontend.innerHTML += 
    `<div class="caja">
      <img src="${card.imgUrl}" alt="${card.lenguajes}"/>
      <p>${card.lenguajes}</p>
      <p>${card.bimestre}</p>
    </div>`
  })
}


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const buttonTema = document.querySelector("#sitio");
  buttonTema.classList.toggle("dark");
}


/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let mostrarTexto = document.getElementById("sobre-mi");

window.addEventListener("keydown", key);

function key(e) {
  if (e.key == "f" || e.key == "f") {
    mostrarTexto.classList.remove("oculto");
  }
}