import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001'

async function getPeliculasAPI(filtro) {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/clientes`, { params: { titulo: filtro } })
        console.log("la respuesta es: " + JSON.stringify(response))
        return response.data
    }
    catch (error) {
        console.error("error en la petición a la api de get clientes", error)
        throw error
    }

}
async function addPeliculaAPI(cliente) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/clientes`, cliente)
        return response.data
    }
    catch (error) {
        console.error("error en la petición a la api de post pelicula", error)
        throw error
    }
}

async function updatePeliculaAPI(cliente) {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/clientes`, cliente)
        return response.data
    }
    catch (error) {
        console.error("Error. No se pudo actualizar el cliente", error)
        throw error
    }
}

async function deletePeliculaAPI(dni) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/clientes`, {params:{dni:dni}})
        return response.data
        
    }
    catch (error) {
        console.error("Error. No se pudo eliminar el cliente", error)
        throw error
    }
}

export { getPeliculasAPI, addPeliculaAPI, updatePeliculaAPI, deletePeliculaAPI }