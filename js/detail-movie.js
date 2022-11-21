let query = new URLSearchParams(window.location.search)
let id_pelicula = query.get("q")
//console.log(id_pelicula);

let api_key = "b91fa509ab378b2c4cee3ff42956d489";

url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${api_key}&language=en-US`;
let contenedor_detalle_pelicula = document.querySelector(".contenedor_detalle_pelicula");


///// FETCH DETALLE PELÍCULAS: FUNCIONA

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        
        //let contenedor_detalle_pelicula = document.querySelector(".contenedor_detalle_pelicula")
        let titulodedetalle = document.querySelector(".titulodedetalle")

        titulodedetalle.innerText = data.original_title

        let generos2string = "";

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

    //// FETCH RECOMENDACIONES:  NO FUNCIONA

fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${api_key}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        //console.log(data);
        contenedor_detalle_pelicula.innerHTML +=
        `<section class="recomendaciones"></section>"`

        let recomendaciones = document.querySelector(".recomendaciones")

        for (let i = 0; i < 5; i++) { 
            recomendaciones.innerHTML += 
            `<article>
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
            </article>`
            }

        /// EL ERROR ESTÁ ACÁ

        let boton = document.querySelector(".toggle"); 
        //console.log(boton);
        boton.addEventListener("click", function () { 
            let recomendaciones = document.querySelector(".recomendaciones")
            console.log(recomendaciones); // esto no imprime nada 
            //console.log(recomendaciones.style.display);
            recomendaciones.classList.toggle("not-show")
            if (boton.value === "Mostrar") {
                boton.innerText = "Ocultar"
            } else {
                boton.innerText = "Mostrar"
            }
        })
    })

// FETCH WATCH PROVIDERS: NO FUNCIONA

fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}/watch/providers?api_key=${api_key}`)
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
                    </article>`; // aca también marca error en la consola
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
    })
