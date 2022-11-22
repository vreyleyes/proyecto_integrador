let query = new URLSearchParams(window.location.search);
let id_serie = query.get("q");
//console.log(id_serie);

let api_key = "b91fa509ab378b2c4cee3ff42956d489";

url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${api_key}`;
let contenedor_detalle_serie = document.querySelector(".contenedor_detalle_serie");

///// FETCH DETALLE SERIES: FUNCIONA

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data);
    let titulodedetalle = document.querySelector(".titulodedetalle");

    titulodedetalle.innerText = data.name;

    let generos2string = "";    

    for (let i = 0; i < data.genres.length; i++) {
      generos2string += data.genres[i].name + " ";
    }

    let item2 = document.querySelector(".item2");
    item2.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
                <aside>
                    <p>Estreno: ${data.first_air_date}</p>
                    <p>Calificación: ${data.vote_average}</p>
                    <p>Género: ${generos2string}</p>
                    <p>Sinopsis: ${data.overview}</p>
                    
                </aside>`
  });

//// FETCH RECOMENDACIONES: FUNCIONA

fetch(`https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${api_key}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let recomendaciones = document.querySelector(".recomendaciones");

    for (let i = 0; i < 5; i++) {
      recomendaciones.innerHTML += `
        <article>
        <a href="./detail-serie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"></a>
        </article>
        `;
    }

    let boton = document.querySelector(".toggle");
    console.log(boton);
    boton.addEventListener("click", function () {
      let recomendaciones = document.querySelector(".recomendaciones")
      recomendaciones.classList.toggle("not-show")
      if (boton.value === "Mostrar") {
        boton.innerText = "Ocultar"
      } else {
        boton.innerText = "Mostrar"
      }
      //console.log("HOLA MUNDO");
    });

  });

//// FETCH WATCH PROVIDERS: FUNCIONA

fetch(`https://api.themoviedb.org/3/tv/${id_serie}/watch/providers?api_key=${api_key}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data);

    let comprar = document.querySelector(".comprar");
    let streaming = document.querySelector(".streaming");

    if (data.results.US) {
      if (data.results.US.buy) {
        for (let i = 0; i < data.results.US.buy.length; i++) {
          comprar.innerHTML += `
          <article>
            <img class="imgdata" src="https://image.tmdb.org/t/p/w200/${data.results.US.buy[i].logo_path}" alt="">
            <p>${data.results.US.buy[i].provider_name}</p>
          </article>`;
        }
      }
      if (data.results.US.flatrate) {
        for (let i = 0; i < data.results.US.flatrate.length; i++) {
          streaming.innerHTML += `
          <article>
          <img class="imgdata" src="https://image.tmdb.org/t/p/w200/${data.results.US.flatrate[i].logo_path}" alt=""><p>${data.results.US.flatrate[i].provider_name}</p>
          </article>`;
        }
      }
    }
    if (data.results.CH) {
      if (data.results.CH.buy) {
        for (let i = 0; i < data.results.CH.buy.length; i++) {
          comprar.innerHTML += `
          <article>
          <img class="imgdata" src="https://image.tmdb.org/t/p/w200/${data.results.CH.buy[i].logo_path}" alt=""><p>${data.results.CH.buy[i].provider_name}</p>
          </article>`;
        }
      }
      if (data.results.CH.flatrate) {
        for (let i = 0; i < data.results.CH.flatrate.length; i++) {
          streaming.innerHTML += `
          <article>
          <img class="imgdata" src="https://image.tmdb.org/t/p/w200/${data.results.CH.flatrate[i].logo_path}" alt=""><p>${data.results.CH.flatrate[i].provider_name}</p>
          </article>`;
        }
      }
    }
  })

  .catch(function (error) {
    console.log(error);
  });












  let id=id_serie

  let idfavoritos2 = [];
  console.log(idfavoritos2)
  
  let recuperoStorage2 = localStorage.getItem("favoritos2");
  console.log(recuperoStorage2)
  
  
  if (recuperoStorage2 != null){
      
      idfavoritos2= JSON.parse(recuperoStorage2);
      
  }
  
  
  let link= document.querySelector(".favslink");
  
  
  if (idfavoritos2.includes(id)){
      link.innerText = "Sacar de favoritos"
  };
  
  
  
  
  link.addEventListener("click", function(e){
      
      e.preventDefault();
      if (idfavoritos2.includes(id)){
          
          let indice= idfavoritos2.indexOf(id);
          
          idfavoritos2.splice(indice, 1);
          link.innerText= "Agregar a favoritos";
      } else {
          
          idfavoritos2.push(id);
          
          link.innerText= "Sacar de favoritos"
      }
      
      let personajesFavoritosToString= JSON.stringify(idfavoritos2);
      localStorage.setItem("favoritos2", personajesFavoritosToString);
      
  })
  console.log("holaaaaaaaaaaa")
  console.log(localStorage)