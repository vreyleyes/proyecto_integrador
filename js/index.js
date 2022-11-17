let api_key = "b91fa509ab378b2c4cee3ff42956d489"

let end_point_peliculas_populares = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key + "&language=en-US&page=1"
let end_point_series_populares = "https://api.themoviedb.org/3/tv/popular?api_key=" + api_key + "&language=en-US&page=1"





















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

