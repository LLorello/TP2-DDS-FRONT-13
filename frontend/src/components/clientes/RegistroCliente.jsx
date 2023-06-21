import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function RegistroPelicula({ onCancelar, onConfirmar, item }) {
    const [dni, setDni] = useState('')
    const [fecha_compra, setFecha_compra] = useState('')
    const [nombre, setNombre] = useState('')
  
    const { register, handleSubmit, formState:{errors}} = useForm({values: item});

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item == null? 'Nuevo Cliente:': 'Editar Cliente:'}</h5>
                    <form onSubmit={handleSubmit(onConfirmar)}>
                        <div className="form-group">
                            <label htmlFor="titulo">DNI(*):</label>
                            <input type="text" 
                            className="form-control" 
                            id="titulo" 
                            onChange={(e)=>{
                                setDni(e.target.value)
                            }}
                            {...register('dni',{required: 'el campo dni es requerido'})}
                            />
                            {errors.dni && <p>{errors.dni.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="director">Fecha Compra:</label>
                            <input type="text" 
                            className="form-control" 
                            id="director" 
                            onChange={(e)=>{
                                setFecha_compra(e.target.value)
                            }}
                            {...register('fecha_compra',{required: 'el campo Fecha Compra es requerido'})}
                            />
                            {errors.fecha_compra && <p>{errors.fecha_compra.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="genero">Género(*):</label>
                            <input type="text" 
                            className="form-control" 
                            id="genero" 
                            onChange={(e)=>{
                            setNombre(e.target.value) }}
                            {...register('nombre',{required: 'el campo nombre es requerido'})}
                                />
                             {errors.nombre && <p>{errors.nombre.message}</p>}  
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