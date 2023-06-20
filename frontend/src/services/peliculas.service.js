import { peliculas } from "../data/peliculas.data.js";

function getPeliculas(filtro) {
    if (!filtro){
        return peliculas
    }

    const resultado = peliculas
        .filter((p) => {
            return p.titulo.toLocaleLowerCase()
                .includes(filtro.toLocaleLowerCase())
        })
    return resultado
}

function addPelicula(pelicula){
    if(pelicula)
        console.log('Pelicula registrada!')
}


export {getPeliculas, addPelicula}