
let query = location.search; // obtengo la QS
let stringToObject = new URLSearchParams(query); // la transformo a un objeto literal 
let aBuscar = stringToObject.get('búsqueda');  // obtengo los datos de "busqueda"

console.log(aBuscar);


let api_key = "b91fa509ab378b2c4cee3ff42956d489"

let resultados = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${aBuscar}&page=1&include_adult=false`;

console.log(resultados);
  

fetch(resultados)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        let prueba = document.querySelector(".search");
        let peliculaSearch = document.querySelector(".peliculaSearch")
        let buscar = data.results          // o probar .data 

        if(buscar.length == 0){
            probar.innerHTML = "No se encontro ningun resultado que coincide con "+ " "+ aBuscar
        } else {
            probar.innerHTML = "Estos son todos los resultados para" + " " + aBuscar
        }

        for (let i= 0; i< buscar.length; i++){
            peliculaSearch.innerHTML += `        
            <article>


            </article>`
                   // agregar la info del article. 
        } 

    })

    .catch(function(error){
        console.log(error);
    })




