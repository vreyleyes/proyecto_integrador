
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
    

    let search = document.querySelector(".search");
    let peliculaSearch = document.querySelector(".peliculaSearch");

    if (info.length == 0) {
        search.innerHTML = `No se encontró ningún resultado que coincida con ${aBuscar} `

    } else {
        search.innerHTML = `Estos son los resultados para ${aBuscar}`

    }

    for (let i = 0; i < info.length; i++) {
        
        peliculaSearch.innerHTML += `
        <section>
        <article>
        <img src=${info[i].poster_path} alt="">
        <a class="peli"  href="./detail-movie.html?id=${info[i].id}"><p>${info[i].title}</p></a>
        <a class="serie" href="./detail-serie.html?"id=${info[i].id}><p>${info[i].title}</p></a>
        </article>
        </section>
    `
    }

})

.catch(function(error) {
    console.log(error);
})
  
