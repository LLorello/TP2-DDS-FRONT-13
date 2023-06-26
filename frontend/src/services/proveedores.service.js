import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001'

async function getProveedoresAPI(filtro) {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/proveedores/${filtro}`)
        return response.data
    }
    catch (error) {
        console.error("error en la petición a la api de get proveedores", error)
    }

}

async function addProveedorAPI(proveedor) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/proveedores`, proveedor)
        return response.data
    }
    catch (error) {
        console.error("error en la petición a la api de post proveedor", error)
    }
}

async function updateProveedorAPI(proveedor) {
    try {
        const response = await axios.put(`${API_BASE_URL}/api/proveedores`, proveedor)
        return response.data
    }
    catch (error) {
        console.error("Error. No se pudo actualizar el proveedor", error)

    }
}

async function deleteProveedorAPI(dni) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/proveedores`, {params:{dni:dni}})
        return response.data
        
    }
    catch (error) {
        console.error("Error. No se pudo eliminar el proveedor", error)
    }
}

export { getProveedoresAPI, addProveedorAPI, updateProveedorAPI, deleteProveedorAPI }