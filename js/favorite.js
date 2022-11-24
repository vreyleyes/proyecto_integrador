let recuperoStorage= localStorage.getItem("favoritos");
let recuperoStorage2= localStorage.getItem("favoritos2");

console.log(recuperoStorage);
console.log(recuperoStorage2);

let seleccionados = JSON.parse(recuperoStorage);
console.log(seleccionados);

let seleccionados2 = JSON.parse(recuperoStorage2);
console.log(seleccionados2);


let lista= document.querySelector (".contenedor_peliculas_populares");
let nofavs = document.querySelector(".nofavs");


if (seleccionados == null || seleccionados.length == 0) {
    nofavs.innerText = `No hay favoritos seleccionados `

} else {
    for (let i= 0; i < seleccionados.length; i++) {
        buscarYMostrarFavoritos(seleccionados[i])
    }
}

if (seleccionados2 == null || seleccionados2.length == 0) {
    nofavs.innerText = ` No hay favoritos seleccionados`

} else {
    for (let i= 0; i<seleccionados2.length; i++){
        buscarYMostrarFavoritos2(seleccionados2[i])
    }
}

function buscarYMostrarFavoritos (id){
    
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=d8226c95a5537d3b74b85a5b221a6221&language=en-US`;

    fetch(url)

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
                
            lista.innerHTML += `
                <article class="item">
                    <aside>
                        <p>${data.original_title}</p>
                        <a href="./detail-movie.html?q=${id}"><img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt=""></a>
                    </aside>
                </article>
                `
    })

        .catch(function (error) {
            console.log(error);
        })
    }


function buscarYMostrarFavoritos2 (id){
    
    let url = `https://api.themoviedb.org/3/tv/${id}?api_key=d8226c95a5537d3b74b85a5b221a6221&language=en-US`;

    //Aca quiero que si el fetch de la url no funciona (porque la url no existe) porque estoy buscando el id de una serie en 
    //la seccion de peliclas. Quiero que si esa url no existe que se cambia la parte de "movie" de la url a "tv".
    
    fetch(url)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            lista.innerHTML += `
                <article class="item">
                    <aside>
                        <p>${data.original_name}</p>                   
                        <a href="./detail-serie.html?q=${id}"><img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt=""></a>
                    </aside>
                </article>
                 `
        })

        .catch(function (error) {
            console.log(error);
        })
    }