let api_key = "b91fa509ab378b2c4cee3ff42956d489"

let end_point_peliculas_populares = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key + "&language=en-US&page=1"
let end_point_series_populares = "https://api.themoviedb.org/3/tv/popular?api_key=" + api_key + "&language=en-US&page=1"
// aca va la otra api 


// fetch "peliculas populares":
fetch(end_point_peliculas_populares)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        let contenedor_peliculas_populares = document.querySelector(".contenedor_peliculas_populares")  // hacer esto en el html 

        for (let i = 0; i < 5; i++) {
            contenedor_peliculas_populares.innerHTML += `
                <article class="item">
                    <h3 class="subtitulos">${data.results[i].original_title}</h3> 
                    <a href="./detail-movie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="${data.results[i].original_title}"></a>
                    <p>Estreno: ${data.results[i].release_date}</p>
                </article>
            `
        }
    })

    .catch(function (error) {
        console.log(error);
    })

///// fetch "series populares":
    fetch(end_point_series_populares)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        let contenedor_series_populares = document.querySelector(".contenedor_series_populares")

        for (let i = 0; i < 5; i++) {
            contenedor_series_populares.innerHTML += `
                <article class="item">
                    <h3 class="subtitulos">${data.results[i].original_name}</h3> 
                    <a href="./detail-serie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="${data.results[i].original_title}"></a>
                    <p>Estreno: ${data.results[i].first_air_date}</p>
                </article>
            `
        }
    })
    .catch(function (error) {
        console.log(error);
    })
    

//// fetch "peliculas mas vistas":






















////////////////////////////////////////////////////////////////
let formulario = document.querySelector(".formularioheader")
let input = document.querySelector(".buscador")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if ( input.value.length == "" ) {
        alert("¿Qué deseás buscar?")

    } else if ( input.value.length <= 2 ) {
        alert("Escribir al menos 3 caracteres")

    } else {
        this.submit()
    }
})

