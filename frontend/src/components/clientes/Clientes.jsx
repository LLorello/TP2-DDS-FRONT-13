import React, { useEffect, useState } from 'react'
import FiltrosClientes from './FiltrosClientes'
import TablaClientes from './TablaClientes'
import RegistroCliente from './RegistroCliente'

import { getPeliculasAPI, addPeliculaAPI, updatePeliculaAPI, deletePeliculaAPI} from '../services/peliculas.serviceAPI' 

export default function Peliculas() {
  //lógica del componente:
  const [rows, setRows] = useState([])
  const [action, setAction] = useState('C')
  const [item, setItem] = useState(null)


  useEffect(() => {
    //Se dispara cuando se dibuja el componente
    cargarPeliculas()//acá filtro queda como undefined, recupera todas las películas
  }, [])


  const cargarPeliculas = async function (filtro) {
    const pelis = await getPeliculasAPI(filtro)
    console.log(pelis)
    setRows(pelis)
  }

  //Recibimos solo un filtro, no un objeto de filtros
  const onConsultar = (filtro) => {
    cargarPeliculas(filtro)
  }

  const onModificar = (item) => {
    setItem(item)
    console.log(item)
    setAction('M')
  }

  const onEliminar = async (dni) => {
    await deletePeliculaAPI(dni)
    setAction('C')
    cargarPeliculas()
  }


  const onNuevo = () => {
    setAction('N')
  }
  const onCancelar = () => {
    setAction('C')
    setItem(null)
  }

  const onConfirmar = async (cliente) => {
    if (action === 'A')
      await addPeliculaAPI(cliente)
    else
      await updatePeliculaAPI(cliente)

    cargarPeliculas()
    setAction('C')
  }


  return (   
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
            <RegistroCliente onCancelar={onCancelar} onConfirmar={onConfirmar} item={item} />
          </div>
        )
      }
    </>
  )
}