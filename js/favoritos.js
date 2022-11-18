

let favoritos = [];


let recuperoStorage = localStorage.getItem("favoritos");


if (recuperoStorage != null){
    
    favoritos= JSON.parse(recuperoStorage);
    console.log(favoritos);
}


//Necesito el id de la plei/serie
let link= document.querySelector("LINK DE LA PLEI/SERIE");


if (favoritos.includes(id)){
    link.innerText = "Quitar de favoritos"
};
console.log(link);
//eventlistenser que da agerga la peli/serie a favs tiene que esatr linkeado con el index
link.addEventListener("click", function(e){
    
    e.preventDefault();
    if (favoritos.includes(id)){
        let indice= favoritos.indexOf(id);
      
        favoritos.splice(indice, 1);
        link.innerText= "Agregar a favoritos";
    } else {
    
        favoritos.push(id);
        console.log(favoritos)
        link.innerText= "Quitar de favoritos"
    }
    
    let personajesFavoritosToString= JSON.stringify(favoritos);
    localStorage.setItem("favoritos", personajesFavoritosToString);
    console.log(localStorage);
})