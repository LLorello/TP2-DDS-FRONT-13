import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function RegistroPelicula({ onCancelar, onConfirmar, item }) {
    const [titulo, setTitulo] = useState('')
    const [director, setDirector] = useState('')
    const [genero, setGenero] = useState('')
    const [duracion, setDuracion] = useState(0)
    const [sinopsis, setSinopsis] = useState('')
    const [idClasificacion, setIdClasificacion] = useState('')

  
    const { register, handleSubmit, formState:{errors}} = useForm({values: item});

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item == null? 'Nueva Pelicula:': 'Editar Película:'}</h5>
                    <form onSubmit={handleSubmit(onConfirmar)}>
                        <div className="form-group">
                            <label htmlFor="titulo">Título(*):</label>
                            <input type="text" 
                            className="form-control" 
                            id="titulo" 
                            onChange={(e)=>{
                                setTitulo(e.target.value)
                            }}
                            {...register('titulo',{required: 'el campo titulo es requerido'})}
                            />
                            {errors.titulo && <p>{errors.titulo.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="director">Director:</label>
                            <input type="text" 
                            className="form-control" 
                            id="director" 
                            onChange={(e)=>{
                                setDirector(e.target.value)
                            }}
                            {...register('director',{required: 'el campo director es requerido'})}
                            />
                            {errors.director && <p>{errors.director.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="genero">Género(*):</label>
                            <input type="text" 
                            className="form-control" 
                            id="genero" 
                            onChange={(e)=>{
                            setGenero(e.target.value) }}
                            {...register('genero',{required: 'el campo genero es requerido'})}
                                />
                             {errors.genero && <p>{errors.genero.message}</p>}  
                        </div>
                        <div className="form-group">
                            <label htmlFor="duracion">Duración:</label>
                            <input type="number" 
                            className="form-control" 
                            id="duracion" 
                            onChange={(e)=>{
                                setDuracion(e.target.value)
                            }}
                            {...register('duracion',{required: 'el campo duracion es requerido'})}
                            />
                            {errors.duracion && <p>{errors.duracion.message}</p>}  
                        </div>
                        <div className="form-group">
                            <label htmlFor="sinopsis">Sinopsis:</label>
                            <input type="text" 
                            className="form-control" 
                            id="sinopsis" 
                            onChange={(e)=>{
                                setSinopsis(e.target.value) }}
                            {...register('sinopsis',{required: 'el campo sinopsis es requerido'})}
                                />
                             {errors.sinopsis && <p>{errors.sinopsis.message}</p>}  
                        </div>
                        <div className="form-group">
                            <label htmlFor="idClasificacion">Id Clasificacion:</label>
                            <input type="number" 
                            className="form-control" 
                            id="idClasificacion" 
                            onChange={(e)=>{
                                setIdClasificacion(e.target.value)
                            }}
                            {...register('idClasificacion',{required: 'el campo idClasificacion es requerido'})}
                            />
                            {errors.idClasificacion && <p>{errors.idClasificacion.message}</p>}  
                        </div>
                        <button type="submit" className="btn btn-primary">Aceptar</button>
                        <button type='button' className='btn btn-secondary'
                            onClick={() => { onCancelar() }}>Cancelar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
