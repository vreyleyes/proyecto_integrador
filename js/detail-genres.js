let api_key = "b91fa509ab378b2c4cee3ff42956d489";

let detalle_generos_pelicula = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate`;

fetch(detalle_generos_pelicula)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    })