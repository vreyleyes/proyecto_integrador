let queryString = location.search; 
let stringToObject = new URLSearchParams(queryString); 
let aBuscar = stringToObject.get('busqueda');  

let api_key = "b91fa509ab378b2c4cee3ff42956d489";

let resultados = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${aBuscar}`;

fetch(resultados)

    .then(function (response) {
        return response.json()
    })

    .then(function(data) { 

    let info = data.results;
    let search = document.querySelector(".search");
    let peliculaSearch = document.querySelector(".contenedorresultados");

    if (info.length == 0) {
        search.innerHTML = `No se encontró ningún resultado que coincida con ${aBuscar}`

    } else {
        search.innerHTML = `Estos son los resultados de búsqueda para ${aBuscar}`

    }

    for (let i = 0; i < info.length; i++) {
        if (info[i].media_type == "movie") {
            peliculaSearch.innerHTML += `
            <article>
            <a class="peli" href="./detail-movie.html?q=${info[i].id}"><img src="https://image.tmdb.org/t/p/w200/${info[i].poster_path}" alt="${info[i].title}"></a>
            <a class="peli" href="./detail-movie.html?q=${info[i].id}"><p>${info[i].title}</p></a>
            </article>
            `
        } else {
            peliculaSearch.innerHTML += `
            <article>
            <a class="serie" href="./detail-serie.html?q=${info[i].id}"><img src="https://image.tmdb.org/t/p/w200/${info[i].poster_path}" alt="${info[i].name}"></a>
            <a class="serie" href="./detail-serie.html?q=${info[i].id}"><p>${info[i].name}</p></a>
            </article>
            `
        }
    }

})
    .catch(function(error) {
        console.log(error);
    })