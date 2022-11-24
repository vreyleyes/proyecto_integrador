let api_key = "b91fa509ab378b2c4cee3ff42956d489";

let detalle_generos_pelicula = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate`;
let detalle_generos_series = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get("id"); 



if (type == "peli") { //preguntar esto mañana 

    fetch(detalle_generos_pelicula)
    .then(function(response ) {
        return response.json()
    })
    .then (function (data) {
        console.log(data);
        
        let titulo = document.querySelector(".titulos");
        titulo.innerText = data.results.genre_ids;
    

    })
    .catch(function(error) {
        console.log(error);
    })

} else {

    fetch(detalle_generos_series)
        .then(function(response ) {
            return response.json()
        })
        .then (function (data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        })
    }







// Fetch detalle de género de películas

// fetch(detalle_generos_pelicula)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         //console.log(data);

//         let titulo = document.querySelector(".subtitulos");
//         titulo.innerText = data.results.genre_ids;
//         console.log(titulo.innerText);

//         let lista = document.querySelector(".detalle_genero_pelis");
//         let elementos = "";

//         for (let i = 0; i < data.results.length; i++) {

//             elementos +=`
//             <article class="item">
//             <h3 class="subtitulos"> ${data.results[i].title}</h3>
//             <a href="./detail-movie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
//             </article>`
//         }

//         lista.innerHTML += elementos;


//     })

//     // Fetch detalle de género de series

//     fetch(detalle_generos_series)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             console.log(data);

//             // aca tendria que haber algo que ponga de titulo el genero seleccionado

//             let lista = document.querySelector(".detalle_genero_series");
//             let elementos = "";

//             for (let i = 0; i < data.results.length; i++) {
                
//                 elementos += `<article class="item">
//                 <h3 class="subtitulos"> ${data.results[i].name}</h3>
//                 <a href="./detail-movie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
//                 </article>`
//             }

//             lista.innerHTML += elementos;

//         })
//     .catch(function (error) {
//         console.log(error);
//     })
