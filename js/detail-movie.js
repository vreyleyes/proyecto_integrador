let query = new URLSearchParams(window.location.search);
let id_pelicula = query.get("q");
console.log(id_pelicula);

let api_key = "b91fa509ab378b2c4cee3ff42956d489";

url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${api_key}`;
let contenedor_detalle_pelicula = document.querySelector(".contenedor_detalle_pelicula");

// Fetch detalle de película 

fetch(url)

  .then(function(response){
    return response.json();
  })

  .then(function(data){
    console.log(data);

    let titulodedetalle = document.querySelector(".titulodedetalle");
    titulodedetalle.innerText = data.original_title;

    let generos2string = "";
        
    for (let i = 0; i < data.genres.length; i++) {
      generos2string += data.genres[i].name + " ";
    }

    let item2 = document.querySelector(".item2");
    item2.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}"
      <aside><div>
        <p>Estreno: ${data.release_date}</p>
        <p>Duración: ${data.runtime} min</p>
        <p>Calificación: ${data.vote_average}</p>
        <p>Género: <a href="detail-genres.html?id=${generos2string.id}&type=peli">${generos2string}</a></p>
        <p>Sinopsis: ${data.overview}</p>
      
      </div></aside>`
    });

// Fetch recomendaciones

fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${api_key}`)

  .then(function (response) {
    return response.json();
  })

  .then(function(data){
    let recomendaciones = document.querySelector(".recomendaciones");

    for (let i = 0; i < 5; i++) {

      recomendaciones.innerHTML += `
        <article>
          <a href="./detail-movie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"></a>
        </article>`
      
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
   
  });

});


// Fetch watch providers

fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}/watch/providers?api_key=${api_key}`)

    .then(function (response) {
        return response.json();
    })

    .then(function(data){   

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

// favoritos

let id = id_pelicula;

let idfavoritos = [];
   
let recuperoStorage = localStorage.getItem("favoritos");
      
if (recuperoStorage != null) {

  idfavoritos= JSON.parse(recuperoStorage);
}
      
let link= document.querySelector(".favslink");
      
if (idfavoritos.includes(id)){

  link.innerText = "Sacar de favoritos"

}
      
link.addEventListener("click", function(e){
  e.preventDefault();

  if (idfavoritos.includes(id)) {

    let indice = idfavoritos.indexOf(id);
    idfavoritos.splice(indice, 1);
    link.innerText = "Agregar a favoritos";

  } else {
    
    idfavoritos.push(id);
    link.innerText= "Sacar de favoritos"
  }
  
  let personajesFavoritosToString= JSON.stringify(idfavoritos);
  localStorage.setItem("favoritos", personajesFavoritosToString);
  
})