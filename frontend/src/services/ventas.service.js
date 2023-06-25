import axios from "axios"; 

const url = "http://127.0.0.1:3001/api/ventas/"

async function getVentas(filtro=""){
    return await axios.get(`${url}${filtro}`).then(res=>res.data)
}

async function addVentas(venta){
    await axios.post(`${url}`,venta).then(res=>res.data)
}

async function updateVenta(venta){
    await axios.put(`${url}`,venta).then(res=>res.data)
}

async function deleteVenta(venta){
    await axios.delete(`${url}`,{data: venta}).then(res=>res.data)
    
}

export { getVentas, addVentas, updateVenta, deleteVenta }