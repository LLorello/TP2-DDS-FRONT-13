import React, { useEffect, useState } from 'react'
import FiltrosClientes from './FiltrosClientes'
import TablaClientes from './TablaClientes'
import RegistroCliente from './RegistroCliente'

import { getClientesAPI, addClienteAPI, updateClienteAPI, deleteClienteAPI } from '../../services/clientes.serviceAPI'

export default function Clientes() {
  //lógica del componente:
  const [rows, setRows] = useState([])
  const [action, setAction] = useState('C')
  const [item, setItem] = useState(null)


  useEffect(() => {
    //Se dispara cuando se dibuja el componente
    cargarClientes()//acá filtro queda como undefined, recupera todas las películas
  }, [])


  const cargarClientes = async function (filtro) {
    const pelis = await getClientesAPI(filtro)
    setRows(pelis)
  }

  //Recibimos solo un filtro, no un objeto de filtros
  const onConsultar = (filtro) => {
    cargarClientes(filtro)
  }

  const onModificar = (item) => {
    setItem(item)
    console.log(item)
    setAction('M')
  }

  const onEliminar = async (dni) => {
    await deleteClienteAPI(dni)
    setAction('C')
    cargarClientes()
  }


  const onNuevo = () => {
    setAction('N')
  }
  const onCancelar = () => {
    setAction('C')
    setItem(null)
  }

  const onConfirmar = async (cliente) => {
    if (action === 'N'){
      await addClienteAPI(cliente)
    }else{
      await updateClienteAPI(cliente)
    }
      

    cargarClientes()
    setAction('C')
  }


  return (
    //jsx: (vista escrita en HTML+Js)    
    <>
      {action === 'C' && (
        <div>
          <FiltrosClientes onConsultar={onConsultar} onNuevo={onNuevo}></FiltrosClientes>
          <TablaClientes items={rows} onModificar={onModificar} onEliminar={onEliminar}></TablaClientes>
        </div>
      )}

      {
        action !== 'C' && (
          <div>
            <RegistroCliente onCancelar={onCancelar} onConfirmar={onConfirmar} item={item}></RegistroCliente>
          </div>
        )
      }
    </>
  )
}

