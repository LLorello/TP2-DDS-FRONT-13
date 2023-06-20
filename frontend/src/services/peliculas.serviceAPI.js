import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001'

async function getPeliculasAPI(filtro) {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/peliculas`, { params: { titulo: filtro } })
        console.log("la respuesta es: " + JSON.stringify(response))
        return response.data
    }
    catch (error) {
        console.error("error en la petición a la api de get peliculas", error)
        throw error
    }

}

async function addPeliculaAPI(pelicula) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/peliculas`, pelicula)
        return response.data
    }
    catch (error) {
        console.error("error en la petición a la api de post pelicula", error)
        throw error
    }
}

async function updatePeliculaAPI(pelicula) {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/peliculas`, pelicula)
        return response.data
    }
    catch (error) {
        console.error("Error. No se pudo actualizar la película!", error)
        throw error
    }
}

async function deletePeliculaAPI(id) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/peliculas`, {params:{Id:id}})
        return response.data
        
    }
    catch (error) {
        console.error("Error. No se pudo eliminar la película!", error)
        throw error
    }
}

export { getPeliculasAPI, addPeliculaAPI, updatePeliculaAPI, deletePeliculaAPI }