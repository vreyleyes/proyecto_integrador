//// Aca logre que detail genre muestre peliculas o series del genero seleccioando pero mostraba pocas
//// y en algunos casos, ninguna.
///Esto pasa porque hay mas secciones de pelis o series de generos en la otras "page" en la API
/// y en la pagina que recorre el fetch actual, se agotan las pelic o series de ese genero ( o no hay)
///Entonces, puse whiles para que hasta que no haya por lo menos 10 series o pelis.
////Que se siga buscando más en otras paginas "desc&page=${page}" de la seccion de discover de la API
/// Esto lo hice con un contador que le suma 1 en cada iteracion del while





let queryString = location.search;

cantidaddepelis = 1
cantidaddeseries = 1

let queryStringToObject = new URLSearchParams(queryString);

let genreid = queryStringToObject.get("id"); 
let intgenreid = parseInt(genreid)
console.log(intgenreid)
let type = queryStringToObject.get("type")
console.log(genreid);
console.log(type)

let api_key = "b91fa509ab378b2c4cee3ff42956d489";

page= "1"

    
   
if (type == "peli") {
while (cantidaddepelis < 10){

    detalle_generos_pelicula = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=${page}&with_watch_monetization_types=flatrate`;
    console.log(detalle_generos_pelicula)

     //preguntar esto mañana 
        console.log("funca if")
        fetch(detalle_generos_pelicula)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.results[0].genre_ids)
            for (let i = 0; i < data.results.length; i++) {
                
                
                let posiblegenreidArray = (data.results[i].genre_ids)
                console.log(posiblegenreidArray)

                if (posiblegenreidArray.includes(intgenreid)){
                    console.log("funca check")
                    cantidaddepelis= cantidaddepelis +1
                    page=`${cantidaddepelis}`
                    let detalle_generos_pelis= document.querySelector(".detalle_genero_pelis");
                    detalle_generos_pelis.innerHTML += `
                    <article class="item">
                        <h1 class="title">${data.results[i].original_title}</h3> 
                        <a href="./detail-movie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
                        
                    </article>
                `
                    
                    
                } }
            
            })
        .catch(function (error) {
            console.log(error);
        })

    }



}       






if (type == "serie") {
    while (cantidaddeseries < 10){
    
            detalle_generos_series = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
            console.log(detalle_generos_series)
    
         
            
            fetch(detalle_generos_series)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.results[0].genre_ids)
                for (let i = 0; i < data.results.length; i++) {
                    
                    
                    let posiblegenreidArray = (data.results[i].genre_ids)
                    console.log(posiblegenreidArray)
    
                    if (posiblegenreidArray.includes(intgenreid)){
                       
                        cantidaddeseries= cantidaddeseries +1
                        page=`${cantidaddeseries}`
                        let detalle_generos_series= document.querySelector(".detalle_genero_series");
                        detalle_generos_series.innerHTML += `
                        <article class="item">
                            <h1 class="title">${data.results[i].original_name}</h3> 
                            <a href="./detail-movie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
                            
                        </article>
                    `
                        
                        
                    } }
                
                })
            .catch(function (error) {
                console.log(error);
            })
    
        }
    
    
    
    }       
































// FETCH DETALLE GÉNERO de pelis: ME REDIRIGE A TODAS LAS PELÍCULAS, SÓLO QUIERO LAS DEL GÉNERO SELECCIONADO 

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

//     // FETCH DETALLE GENERO SERIES: EL MISMO ERROR QUE EL ANTERIOR

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


// el error también está en que muestran peliculas y series, sin importar qué se seleccionó. Tendría que ser solo series o sólo peliculas




