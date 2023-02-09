
# Proyecto Entregable

### PUNTO 1
Desarrollar la función para consultar al usuario los siguientes datos:
- nombre
- año de nacimiento
- ciudad
- si le interesa Javascript
Los datos obtenidos deberán ser almacenados dentro del objeto **datosPersona**.

**➔ Tips**
- La propiedad **edad debe ser calculada, algo tan simple como restar el año actual menos el año de nacimiento.**
- No se preocupen si aún no se cumplió el mes exacto. Tampoco es necesario usar el objeto Date.

### PUNTO 2
Desarrollar la función para renderizar los datos del usuario, a partir de la información recolectada en la función anterior y almacenada en el objeto **datosPersona**. Para ello, utilizar los elementos HTML que se encuentran en el archivo index.html, modificando los mismos con Javascript.

**➔ Tips**
- No está permitido editar el documento index.html, cualquier cambio debe realizarse utilizando Javascript.
- Ubica los datos del objeto en el **<span>** que corresponda.

### PUNTO 3
Desarrollar la función que recorra el listado y renderizar una especie de tarjeta con la información de cada materia. **Prestar atención, cada una de las clases CSS son necesarias para conservar el diseño:**  
**1.** Cada tarjeta contenedora deberá tener la clase **'caja'**  
**2.** Dentro de cada contenedor se deberá incluir:  
**a.** una imagen con su correspondiente **src** y un **alt** que indique los **lenguajes**.  
**b.** un párrafo que tenga las clase **‘lenguajes’** y muestre los mismos.  
**c.** un párrafo que tenga las clase **‘bimestre’** y muestre el bimestre.  
**3.** Al volver a clickear el botón “Obtener materias”, no deberían volver a renderizarse las materias.  

**➔ Tips**
- Cada ‘caja’ se debe inyectar dentro del contenedor que ya se encuentra en el archivo index.html con el id **'fila'.**

### PUNTO 4
Desarrollar la función que permita al botón de alternar tema funcionar correctamente cada vez que se haga click.
**1.** Utilizar el elemento con el id **‘sitio’** como nodo de referencia.
**2.** Implementar en el elemento la clase **‘dark’** ya creada en el CSS.

**➔ Tips**
- El elemento **‘sitio’** es simplemente un contenedor que envuelve todo el resto de los elementos visibles.

###  PUNTO 5
Finalmente, agregar un listener en nuestra página que nos permita captar el evento de teclado cuando presionamos la tecla **F**.  
**1.** Captar cuando se presiona una tecla.  
**2.** Si la tecla presionada es la **F**, al texto del párrafo **‘sobre-mi’** se le deberá eliminar la clase que lo mantiene oculto.

**➔ Tips**
- En este caso la tecla no debe alternar la visibilidad, solamente desocultar por única vez.

### Link
https://perfil-del-developer.vercel.app/