let query = new URLSearchParams(window.location.search)
let id_serie = query.get("q")
console.log(id_serie);

let api_key = "b91fa509ab378b2c4cee3ff42956d489"

url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${api_key}`
let contenedor_detalle_pelicula = document.querySelector(".contenedor2")

///// fetch "detalle de serie":

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(contenedor_detalle_pelicula);
        let titulodedetalle = document.querySelector(".titulodedetalle")

        titulodedetalle.innerText = data.name

        let generos2string = ""

        for (let i = 0; i < data.genres.length; i++) {
            generos2string += data.genres[i].name + " "
        }

        contenedor_detalle_pelicula.innerHTML = `
            <article class="item2">
                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
                <aside>
                    <p>Estreno: ${data.first_air_date}</p>
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

    fetch(`https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${api_key}`) /// fetch recomendaciones 
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
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

    fetch(`https://api.themoviedb.org/3/tv/${id_serie}/watch/providers?api_key=${api_key}`) /// APARECE ANTES DE RECOMENACIONES, tiene que estar después
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        contenedor_detalle_pelicula.innerHTML +=
        `<section class="comprar"></section>
        <section class="streaming">
            <img src="" alt="">
            <p></p>
        </section>`
        let comprar = document.querySelector(".comprar")
        let streaming = document.querySelector(".streaming")

        if (data.results.US) {
            if (data.results.US.buy) {
                comprar.innerHTML += '<h3 class="elmismotitulo">Comprar</h3>'
                for (let i = 0; i < data.results.US.buy.length; i++) {
                    comprar.innerHTML += `<img class="imgdata" src="https://image.tmdb.org/t/p/w200/${data.results.US.buy[i].logo_path}" alt="">
                    <p>${data.results.US.buy[i].provider_name}</p>`
                }
            }
            if (data.results.US.flatrate) {
                streaming.innerHTML += '<h3 class="elmismotitulo">Streaming</h3>'
                for (let i = 0; i < data.results.US.flatrate.length; i++) {
                    streaming.innerHTML += `<img class="imgdata" src="https://image.tmdb.org/t/p/w200/${data.results.US.flatrate[i].logo_path}" alt="">
                    <p>${data.results.US.flatrate[i].provider_name}</p>`
                }
            }
        }
        if (data.results.CH) {
            if (data.results.CH.buy) {
                comprar.innerHTML += '<h3 class="elmismotitulo">Comprar</h3>'
                for (let i = 0; i < data.results.CH.buy.length; i++) {
                    comprar.innerHTML += `<img class="imgdata" src="https://image.tmdb.org/t/p/w200/${data.results.CH.buy[i].logo_path}" alt="">
                    <p>${data.results.CH.buy[i].provider_name}</p>`
                }
            }
            if (data.results.CH.flatrate) {
                streaming.innerHTML += '<h3 class="elmismotitulo">Streaming</h3>'
                for (let i = 0; i < data.results.CH.flatrate.length; i++) {
                    streaming.innerHTML += `<img class="imgdata" src="https://image.tmdb.org/t/p/w200/${data.results.CH.flatrate[i].logo_path}" alt="">
                    <p>${data.results.CH.flatrate[i].provider_name}</p>`
                }
            }
        }
    })

    .catch(function (error) {
        console.log(error);
    })



    


