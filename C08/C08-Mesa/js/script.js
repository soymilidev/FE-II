const array = [
    {
    titulo:"Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
    imgUrl:"https://tinyurl.com/23elo3d8",
    descripcion: "Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami.",
    date:"07/06/21",
    tipoNacional: true,
    },
    {
    titulo:"El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
    imgUrl:"https://tinyurl.com/27h5bhhc",
    descripcion: "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
    date:"02/06/21",
    tipoNacional: false,
    },
    {
    titulo:"Cómo evitar que se empañen los anteojos al usar barbijo",
    imgUrl:"https://tinyurl.com/27kt89qj",
    descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación. Paso a paso para evitar que se empañen",
    date:"01/06/21",
    tipoNacional: true,
    },
    {
    titulo:"La UE aprobó el fondo para apoyar a las regiones afectadas por la transición verde",
    imgUrl:"https://tinyurl.com/28rhrwpe",
    descripcion: "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero",
    date:"04/06/21",
    tipoNacional: false,
    },
    {
    titulo:"Maradona: cómo es la muestra fotográfica que deslumbra a todos en Serbia",
    imgUrl:"https://tinyurl.com/27ovlch6",
    descripcion: "La exposición cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de Télam, es uno de los hitos del festival Mes de la Fotografía de Belgrado",
    date:"07/06/21",
    tipoNacional: true,
    },
    ];

  
//1.CONSTRUCCIÓN DE PLANTILLA PARA C/ OBJETO DEL ARRAY
//forEach ---> iterar a través de cada objeto (obj) en el arreglo y para cada objeto, crear una plantilla con las propiedades del objeto.
array.forEach(obj => {
    let template = `
      <section>
        <article>
          <div class="card">
            <img class="img-responsive" src="${obj.imgUrl}" alt="Imagen de noticia">
            <div class="card-content">
              <h2 class="card-title">${obj.titulo}</h2>
              <p class="card-description">${obj.descripcion}</p>
              <p class="card-date">${obj.date}</p>
            </div>
          </div>
        </article>
      </section>
    `;
    //2.INSERTAR CADA PLANTILLA EN LA WEB
    app.insertAdjacentHTML('beforeend', template);
    //insertAdjacentHTML es un método de JS que permite insertar HTML en un elemento existente en una página web.
    //app.insertAdjacentHTML('beforeend', template) ---> se está insertando el HTML en la variable template al final del elemento con la clase app. 
    //Agrega la plantilla a la web para mostrar la noticia.
  });


//Noticias filtradas según el tipo
//1.
const createNewsTemplate = obj => `
  <section>
    <article>
      <div class="card">
        <img class="img-responsive" src="${obj.imgUrl}" alt="Imagen de noticia">
        <div class="card-content">
          <h2 class="card-title">${obj.titulo}</h2>
          <p class="card-description">${obj.descripcion}</p>
          <p class="card-date">${obj.date}</p>
        </div>
      </div>
    </article>
  </section>
`;

//2.
const displayNews = newsArray => {
  app.innerHTML = '';
  newsArray.forEach(obj => {
    const template = createNewsTemplate(obj);
    app.insertAdjacentHTML('beforeend', template);
  });
};

//3.
document.querySelector('.all').addEventListener('click', () => {
  displayNews(array);
});

document.querySelector('.international').addEventListener('click', () => {
  displayNews(array.filter(obj => !obj.tipoNacional));
});

document.querySelector('.national').addEventListener('click', () => {
  displayNews(array.filter(obj => obj.tipoNacional));
});



//Otra forma de filtar las noticias:
/* 
document.querySelector('.all').addEventListener('click', () => {
  app.innerHTML = '';
  array.forEach(obj => {
    let template = `
    <section>
      <article>
        <div class="card">
          <img class="img-responsive" src="${obj.imgUrl}" alt="Imagen de noticia">
          <div class="card-content">
            <h2 class="card-title">${obj.titulo}</h2>
            <p class="card-description">${obj.descripcion}</p>
            <p class="card-date">${obj.date}</p>
          </div>
        </div>
      </article>
    </section>
  `;
  app.insertAdjacentHTML('beforeend', template);
  });
});

document.querySelector('.international').addEventListener('click', () => {
  app.innerHTML = '';
  array.filter(obj => !obj.tipoNacional).forEach(obj => {
    let template = `
    <section>
      <article>
        <div class="card">
          <img class="img-responsive" src="${obj.imgUrl}" alt="Imagen de noticia">
          <div class="card-content">
            <h2 class="card-title">${obj.titulo}</h2>
            <p class="card-description">${obj.descripcion}</p>
            <p class="card-date">${obj.date}</p>
          </div>
        </div>
      </article>
    </section>
  `;
  app.insertAdjacentHTML('beforeend', template);
  });
});

document.querySelector('.national').addEventListener('click', () => {
  app.innerHTML = '';
  array.filter(obj => obj.tipoNacional).forEach(obj => {
    let template = `
    <section>
      <article>
        <div class="card">
          <img class="img-responsive" src="${obj.imgUrl}" alt="Imagen de noticia">
          <div class="card-content">
            <h2 class="card-title">${obj.titulo}</h2>
            <p class="card-description">${obj.descripcion}</p>
            <p class="card-date">${obj.date}</p>
          </div>
        </div>
      </article>
    </section>
  `;
  app.insertAdjacentHTML('beforeend', template);
  });
}); 
*/