import React, { useState } from 'react'

export default function FiltrosPeliculas({ onConsultar, onNuevo }) {
    //lógica del componente:
    const [titulo, setTitulo] = useState('')

    return (
        //jsx: (vista escrita en HTML+Js)   
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Filtros:</h5>
                            <div className='row'>
                                <div className='col-auto'>
                                    Título:
                                </div>
                                <div className='col-auto'>
                                    <input type='text'
                                        placeholder='Título'
                                        onChange={(event) => { setTitulo(event.target.value) }}
                                    >
                                    </input>
                                </div>
                                <div className='col-auto'>
                                    <button type='button' className='btn btn-success'
                                        onClick={() => { onConsultar(titulo) }}//enviamos solo un filtro como una variable
                                    >
                                        Consultar
                                    </button>
                                </div>
                                <div className='col-auto'>
                                    <button type='button' className='btn btn-primary'
                                        onClick={() => { navigator.clipboard.writeText("btn btn-primary") }}
                                    >Nuevo
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
