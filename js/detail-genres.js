let api_key = "b91fa509ab378b2c4cee3ff42956d489";

let detalle_generos_pelicula = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate`;
let detalle_generos_series = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get("id"); 

let query = location.search;
let queryToObject = new URLSearchParams(query);
let type = queryToObject.get("type");
console.log(type);


if (type == "peli") {
    
    //fetch detalle de género de peli

    fetch(detalle_generos_pelicula)

        .then(function (response) {
            return response.json()
        })

        .then(function (data) {
            console.log(data);

            // let titulo = document.querySelector(".subtitulos");
            // titulo.innerText = data.results.genre_ids;

            let lista = document.querySelector(".detalle_genero_pelis");
            let elementos = "";

            for (let i = 0; i < data.results.length; i++) {
                
                let lista_generos = data.results[i].genre_ids;

                elementos +=`
                <article class="item">
                    <h3 class="subtitulos"> ${data.results[i].title}</h3>
                    <a href="./detail-movie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="${data.results[i].title}"></a>
                </article>`
            }

            lista.innerHTML += elementos;
        })

    } else {
        
        //fetch detalle de género de serie
        
        fetch(detalle_generos_series)

            .then(function(response) {
                return response.json()
            })

            .then(function(data) {
                console.log(data);

                let lista = document.querySelector(".detalle_genero_series");
                let elementos = "";

                for (let i = 0; i < data.results.length; i++) {
                    
                    elementos += `<article class="item">
                        <h3 class="subtitulos"> ${data.results[i].name}</h3>
                        <a href="./detail-serie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="${data.results[i].name}"></a>
                    </article>`
                }

                lista.innerHTML += elementos;

            })

        .catch(function (error) {
            console.log(error);
        })

    }
