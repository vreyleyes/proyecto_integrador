let formulario = document.querySelector(".formularioheader");
let input = document.querySelector(".buscador");

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


