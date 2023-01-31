
# Consigna
En base al ejemplo trabajado en clase, deberán realizar la siguiente consigna que solo le añade algunos condimentos al script que ya tienen.

### Etapa 1 - “Estática”
Deberán modificar el HTML para hacer unos pequeños ajustes. Ahora necesitamos que las etiquetas de imágenes estén envueltas en etiquetas de link. Con la condición de que estas deben tener una clase para luego poder seleccionarlas desde nuestro JavaScript. Ejemplo: **<a class=”rutas-img”><img/></a>**

Así de sencillo, sin ningún atributo porque lo agregaremos dinámicamente.

### Etapa 2 - “Dinámica”
A. Sin sus correspondientes “**href**” nuestros links no van a funcionar, por lo que debemos identificar en nuestro script el momento en que agregamos los “**src**” a nuestras imágenes. Es ahí donde debemos aprovechar y también indicar los “**href**” de nuestras **<a>**. Obviamente tenemos que haberlos captado con su selector previamente.  
B. Concluida la primera parte de esta etapa, deberán hacer que los links abran las imágenes en una pestaña nueva. Para eso deberán recordar de Front 1, qué atributo es el que determina esta acción e implementarlo. **Obviamente esto de manera dinámica, desde el archivo js, no debemos hacerlo en el html.**

### Etapa 3 - “Mejoras a implementar”
Como equipo, deben debatir sobre una posible mejora para el código. La idea es que esta mejora incluya la utilización de plantillas literales (template literals).
Para eso, primero deberán identificar cuál es el nodo que se repite varias veces y va cambiando según la url. También debe especificar cuál es el nodo padre que contiene a estos nodos que se repiten. Y por último, redactar una breve explicación sobre lo que harían para lograr lo solicitado. Esto lo deberán plasmar al final de JS como un comentario.

/*  
ETAPA 3  
-Nodo padre:  
-Nodo hijo repetitivo:  
-Explicación:  
*/

