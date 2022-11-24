
let queryString = location.search;

let queryStringToObject = new URLSearchParams(queryString);

let genreid = queryStringToObject.get("id"); 
let intgenreid = parseInt(genreid)
console.log(intgenreid)
let type = queryStringToObject.get("type")

let api_key = "b91fa509ab378b2c4cee3ff42956d489";
let  detalle_generos_pelicula = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate`;
 
detalle_generos_series = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
console.log(genreid);
console.log(type)



flag=false
    
   
if (type == "peli") {


   
    console.log(detalle_generos_pelicula)


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
                    flag=true
                   
                    let detalle_generos_pelis= document.querySelector(".detalle_genero_pelis");
                    detalle_generos_pelis.innerHTML += `
                    <article class="item">
                        <h1 class="title">${data.results[i].original_title}</h3> 
                        <a href="./detail-movie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
                        
                    </article>
                `
                    
                    
                } }
                
                if (flag==false){
                    let detalle_generos_pelis= document.querySelector(".detalle_genero_pelis");
                    detalle_generos_pelis.innerHTML = `
                    <article class="item">
                        <h1>No hay peliculas de este género 😔</h3> 
                        
                        
                    </article>
                `
                }
             
            
            
            })
        .catch(function (error) {
            console.log(error);
        })

    }



 






if (type == "serie") {
    
    
            
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
                        flag=true
                 
                       
                        let detalle_generos_series= document.querySelector(".detalle_genero_series");
                        detalle_generos_series.innerHTML += `
                        <article class="item">
                            <h1 class="title">${data.results[i].original_name}</h3> 
                            <a href="./detail-movie.html?q=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a>
                            
                        </article>
                    `
                        
                        
                    } }
                    if (flag==false){
                        let detalle_generos_series= document.querySelector(".detalle_genero_series");
                        detalle_generos_series.innerHTML = `
                        <article class="item">
                            <h1>No hay series de este género 😔</h3> 
                            
                            
                        </article>
                    `
                    }
                 
                
                })
            .catch(function (error) {
                console.log(error);
            })
    
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




