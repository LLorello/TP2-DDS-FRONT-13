import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001'

async function getClientesAPI(filtro) {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/clientes`, {params: {nombre: filtro}})
        return response.data
    }
    catch (error) {
        console.error("error en la petición a la api de get clientes", error)
    }

}

async function addClienteAPI(cliente) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/clientes`, cliente)
        return response.data
    }
    catch (error) {
        console.error("error en la petición a la api de post cliente", error)
    }
}

async function updateClienteAPI(cliente) {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/clientes`, cliente)
        return response.data
    }
    catch (error) {
        console.error("Error. No se pudo actualizar el cliente", error)

    }
}

async function deleteClienteAPI(dni) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/clientes`, {params:{dni:dni}})
        return response.data
        
    }
    catch (error) {
        console.error("Error. No se pudo eliminar el cliente", error)
    }
}

export { getClientesAPI, addClienteAPI, updateClienteAPI, deleteClienteAPI }