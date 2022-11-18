

let query = location.search; // obtengo la QS
let stringToObject = new URLSearchParams(query); // la transformo a un objeto literal 
let aBuscar = stringToObject.get('búsqueda');  // obtengo los datos de "busqueda"

console.log(aBuscar);


let api_key = "b91fa509ab378b2c4cee3ff42956d489"

// let resultados = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${aBuscar}&page=1&include_adult=false`;

let resultados = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${aBuscar}&page=1&include_adult=false`;

console.log(resultados);
  

// fetch(resultados)

//     .then(function(response){
//         return response.json()
//     })

//     .then(function(data){
//         console.log(data);
//         let info = data.results
//         let conteiner = document.querySelector(".searchResults");
//         let peliculas = '' // preguntar esto 

//         for(let i=0; i<info.length; i ++){
//             peliculas += `<article> `  // pregunar y terminar de agrgar la info. Hay que poner los detalles tmb.                     

//         }
//     })

//     .catch(function(error){
//         console.log(error);
//     })




