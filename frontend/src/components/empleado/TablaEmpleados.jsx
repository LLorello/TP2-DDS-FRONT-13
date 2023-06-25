import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const TablaEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [legajo, setLegajo] = useState('');
  const [empleado, setEmpleado] = useState(null);

  const obtenerEmpleado = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/empleados/${legajo}`);
      setEmpleado(response.data);
    } catch (error) {
      console.error('Error al obtener el empleado:', error);
    }
  };

  const handleBuscar = () => {
    obtenerEmpleado();
  };


  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const obtenerEmpleados = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/empleados');
      setEmpleados(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarEmpleado = async (legajo) => {
    try {
      await axios.delete(`http://localhost:3001/api/empleados/${legajo}`);
      alert("Empleado Borrado con exito.")
      obtenerEmpleados();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div>
        <h2 >Buscar Empleado</h2>
        <div className='row'>
          <div className='col-auto'>
            <label className='mt-2' htmlFor="legajo">Legajo:</label>
          </div>
          <div className='col-auto'>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="legajo"
                value={legajo}
                onChange={(e) => setLegajo(e.target.value)}
              />
            </div>
          </div>
          <div className='col-auto'>
            <button className="btn btn-primary" onClick={handleBuscar}>
              Buscar
            </button>
          </div>
          <div className='offset-md-4'>
            <Link className="btn btn-success" to="/empleados/agregar">Agregar Empleado</Link>
          </div>
        </div>
        {empleado && (
          <div>
            <h3>Empleado encontrado:</h3>
            <p>Legajo: {empleado.legajo}</p>
            <p>Nombre: {empleado.nombre}</p>
            <p>Fecha de Nacimiento: {empleado.fechaNacimiento}</p>
          </div>
        )}
      </div>

      {/*------------------- Lista de Empleados ----------------------- */}
      <h2>Lista de Empleados</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Legajo</th>
            <th>Nombre</th>
            <th>Fecha de Nacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.legajo}>
              <td>{empleado.legajo}</td>
              <td>{empleado.nombre}</td>
              <td>{empleado.nacimiento}</td>
              <td>
                <Link className="btn btn-primary w-75" to={`/empleados/editar/${empleado.legajo}`}>Editar</Link>
                <button className="btn btn-danger text-start w-75" onClick={() => eliminarEmpleado(empleado.legajo)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default TablaEmpleados;