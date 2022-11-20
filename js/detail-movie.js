let query = new URLSearchParams(window.location.search)
let id_pelicula = query.get("q")

let api_key = "b91fa509ab378b2c4cee3ff42956d489"

url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${api_key}&language=en-US`
let contenedor_detalle_pelicula = document.querySelector(".contenedor_detalle_pelicula")


///// fetch "detalle de película":

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        let contenedor_detalle_pelicula = document.querySelector(".contenedor_detalle_pelicula")
        let titulodedetalle = document.querySelector(".titulodedetalle")

        titulodedetalle.innerText = data.original_title

        let generos2string = ""

        for (let i = 0; i < data.genres.length; i++) {
            generos2string += data.genres[i].name + " "
        }

        contenedor_detalle_pelicula.innerHTML = `
            <article class="item2">
                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}"
                <aside>
                    <p>Estreno: ${data.release_date}</p>
                    <p>Duración: ${data.runtime} min</p>
                    <p>Calificación: ${data.vote_average}</p>
                    <p>Género: ${generos2string}</p>
                    <p>Sinopsis: ${data.overview}</p>
                    <button type="button" class="favboton"><a class="favslink" href="./favorite.html">Agregar a Favoritos</a></button>
                </aside>
            </article>
            <button class="mostrar">
            Mostrar
            </button>`
    })

    //// fetch recomendaciones:
    fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${api_key}`)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        contenedor_detalle_pelicula.innerHTML +=
        `<section class="recomendaciones">
        
        </section>"`

        let recomendaciones = document.querySelector(".recomendaciones")

        for (let i = 0; i < 5; i++) { 

            recomendaciones.innerHTML += 
            `<article>
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
            </article>`
    
            }
        console.log(data);

        // aca iria lo del boton pero no funciona muy bien en detail seires.js

        let boton = document.querySelector(".mostrar")
        boton.addEventListener("click", function () {
            let recomendaciones = document.querySelector(".recomendaciones")
            console.log(recomendaciones.style.display);
            if (recomendaciones.style.display == "none") {
                recomendaciones.style.display = "block"
                boton.innerText = "ocultar"
            } else {
                recomendaciones.style.display = "none"
                boton.innerText = "mostrar"
            }
           
        })

    })

    // aca iria un fetch de watch providers:


    





















    .catch(function (error) {
        console.log(error);
    })
