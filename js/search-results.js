
let queryString = location.search; // obtengo query string 
let stringToObject = new URLSearchParams(queryString); // transformo a un objeto literal 
let aBuscar = stringToObject.get('búsqueda');  // obtengo datos busqueda usuario


let api_key = "b91fa509ab378b2c4cee3ff42956d489";

let resultados = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${aBuscar}`;


fetch(resultados)

.then(function (response) {
    return response.json()
})

.then(function(data) {
    console.log(data); 

    let info = data.results; // la info está acá 
    console.log(info);

    let search = document.querySelector(".search");
    let peliculaSearch = document.querySelector(".contenedorresultados");

    if (info.length == 0) {
        search.innerHTML = `No se encontró ningún resultado que coincida con ${aBuscar} `

    } else {
        search.innerHTML = `Estos son los resultados para ${aBuscar}`

    }

    for (let i = 0; i < info.length; i++) {
        if (info[i].media_type == "movie") {
            peliculaSearch.innerHTML += `
            <article>
            <img src="https://image.tmdb.org/t/p/w200/${info[i].poster_path}" alt="">
            <a class="peli"  href="./detail-movie.html?q=${info[i].id}"><p>${info[i].title}</p></a>
            </article>
            `
        } else {
            peliculaSearch.innerHTML += `
            <article>
            <img src="https://image.tmdb.org/t/p/w200/${info[i].poster_path}" alt="">
            <a class="serie" href="./detail-serie.html?q=${info[i].id}"><p>${info[i].name}</p></a>
            </article>
            `
        }
    }

})

.catch(function(error) {
    console.log(error);
})
  

