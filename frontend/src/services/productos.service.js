import axios from "axios"; 

const url = "http://127.0.0.1:3001/api/productos/"

async function getProductos(filtro=""){
    return await axios.get(`${url}${filtro}`).then(res=>res.data)
}

async function addProductos(producto){
    await axios.post(`${url}`,producto).then(res=>res.data)
}

async function updateProducto(producto){
    await axios.put(`${url}`,producto).then(res=>res.data)
}

async function deleteProducto(producto){
    await axios.delete(`${url}`,{data: producto}).then(res=>res.data)
    
}

export { getProductos, addProductos, updateProducto, deleteProducto }