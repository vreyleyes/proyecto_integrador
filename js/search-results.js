// le falta un monton 


let query = location.search; // obtengo la QS
let stringToObject = new URLSearchParams(query); // la transformo a un objeto literal 
let aBuscar = stringToObject('búsqueda');  // obtengo los datos de "busqueda"

// que url iria aca?  let url = 

// console.log(url);

fetch(url)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        let info = data.results
        let conteiner = document.querySelector(".searchResults");
        let peliculas = '' // preguntar esto 

        for(let i=0; i<info.length; i ++){
            peliculas += `<article> `  // pregunar y terminar de agrgar la info. Hay que poner los detalles tmb.                     

        }
    })

    .catch(function(error){
        console.log(error);
    })
