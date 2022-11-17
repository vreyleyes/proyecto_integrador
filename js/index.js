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

let url = "https://api.themoviedb.org/3/search/movie?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=en-US&page=1&include_adult=false";

fetch(url)

    .then(function(response) {
        return response.json()
    })

    .then(function(data) {
        console.log(data);


    })

    .catch(function(error) {
        console.log(error);
    })