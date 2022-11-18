let query = new URLSearchParams(window.location.search)
let id_pelicula = query.get("q")

const api_key = "b91fa509ab378b2c4cee3ff42956d489"

url = `https://api.themoviedb.org/3/movie/${id_serie}?api_key=${api_key}&language=en-US`


///// fetch "detalle de serie":

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        let contenedor_detalle_pelicula = document.querySelector(".contenedor_series_populares")
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
        `
    })
    .catch(function (error) {
        console.log(error);
    })
