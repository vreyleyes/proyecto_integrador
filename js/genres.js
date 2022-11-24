let api_key = "b91fa509ab378b2c4cee3ff42956d489";

let generos_peliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;
let generos_series = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}`;

fetch(generos_peliculas) 

    .then(function (response) {
        return response.json()
    })

    .then(function(data) { 
        let lista = document.querySelector(".generospelis");
        let elementos = '';

        for (let i = 0; i < data.genres.length; i++) {
            elementos += `
            <article class="generoshijos">
                <p><a class="generos" href="detail-genres.html?id=${data.genres[i].id}&type=peli">${data.genres[i].name}</a></p>
            </article>
            `
        }

        lista.innerHTML += elementos;

    fetch(generos_series)

        .then(function (response) {
            return response.json()
        })

        .then(function(data) {
            console.log(data);

            let lista = document.querySelector(".generosseries");
            let elementos = "";

            for (let i = 0; i < data.genres.length; i++) {
                elementos +=`
                <article class="generoshijos">
                    <p><a class="generos" href="detail-genres.html?id=${data.genres[i].id}&type=serie">${data.genres[i].name}</a></p>
                </article>
                `
            }

            lista.innerHTML += elementos;
        })
    })
        .catch(function(error) {
            console.log(error);
        })
  
