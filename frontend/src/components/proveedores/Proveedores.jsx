import React, { useEffect, useState } from 'react'
import FiltrosProveedores from './FiltrosProveedores'
import TablaProveedores from './TablaProveedores'
import RegistroProveedores from './RegistroProveedores'

import { getProveedoresAPI, addProveedorAPI, updateProveedorAPI, deleteProveedorAPI } from '../../services/proveedores.service.js'

export default function Proveedores() {
  const [rows, setRows] = useState([])
  const [action, setAction] = useState('C')
  const [item, setItem] = useState(null)


  useEffect(() => {
    cargarProveedores()  }, [])


  const cargarProveedores = async function (filtro) {
    const proveedores = await getProveedoresAPI(filtro)
    setRows(proveedores)
  }

  const onConsultar = (filtro) => {
    cargarProveedores(filtro)
  }

  const onModificar = (item) => {
    setItem(item)
    console.log(item)
    setAction('M')
  }

  const onEliminar = async (dni) => {
    await deleteProveedorAPI(dni)
    setAction('C')
    cargarProveedores()
  }


  const onNuevo = () => {
    setAction('N')
  }
  const onCancelar = () => {
    setAction('C')
    setItem(null)
  }

  const onConfirmar = async (proveedor) => {
    if (action === 'A')
      await addProveedorAPI(proveedor)
    else
      await updateProveedorAPI(proveedor)

    cargarProveedores()
    setAction('C')
  }


  return (
    //jsx: (vista escrita en HTML+Js)    
    <>
      {action === 'C' && (
        <div>
          <FiltrosProveedores onConsultar={onConsultar} onNuevo={onNuevo}></FiltrosProveedores>
          <TablaProveedores items={rows} onModificar={onModificar} onEliminar={onEliminar}></TablaProveedores>
        </div>
      )}

      {
        action !== 'C' && (
          <div>
            <RegistroProveedores onCancelar={onCancelar} onConfirmar={onConfirmar} item={item}></RegistroProveedores>
          </div>
        )
      }
    </>
  )
}