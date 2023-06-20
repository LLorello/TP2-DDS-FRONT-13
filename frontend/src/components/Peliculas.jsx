import React, { useEffect, useState } from 'react'
import FiltrosPeliculas from './FiltrosPeliculas'
import TablaPeliculas
  from './TablaPeliculas'
import RegistroPelicula from './RegistroPelicula'
//import { addPelicula, getPeliculas } from '../services/peliculas.service'
import { getPeliculasAPI, addPeliculaAPI, updatePeliculaAPI, deletePeliculaAPI } from '../services/peliculas.serviceAPI'

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

  const onEliminar = async (id) => {
    await deletePeliculaAPI(id)
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

  const onConfirmar = async (pelicula) => {
    if (action === 'A')
      await addPeliculaAPI(pelicula)
    else
      await updatePeliculaAPI(pelicula)

    cargarPeliculas()
    setAction('C')
  }


  return (
    //jsx: (vista escrita en HTML+Js)    
    <>
      {action === 'C' && (
        <div>
          <FiltrosPeliculas onConsultar={onConsultar} onNuevo={onNuevo}></FiltrosPeliculas>
          <TablaPeliculas items={rows} onModificar={onModificar} onEliminar={onEliminar}></TablaPeliculas>
        </div>
      )}

      {
        action !== 'C' && (
          <div>
            <RegistroPelicula onCancelar={onCancelar} onConfirmar={onConfirmar} item={item} />
          </div>
        )
      }
    </>
  )
}

