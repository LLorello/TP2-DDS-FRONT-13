import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditarEmpleado = () => {
  const { legajo } = useParams();
  const [nombre, setNombre] = useState('');
  const [nacimiento, setFechaNacimiento] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    obtenerEmpleado();
  }, []);

  const obtenerEmpleado = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/empleados/${legajo}`);
      const empleado = response.data;
      setNombre(empleado.nombre);
      setFechaNacimiento(empleado.nacimiento);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nombre') {
      setNombre(value);
    } else if (name === 'fechaNacimiento') {
      setFechaNacimiento(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const empleado = { nombre, nacimiento };
    try {
      await axios.put(`http://localhost:3001/api/empleados/${legajo}`, empleado);
      alert('Empleado modificado exitosamente');
      navigate('/empleados');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Editar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Nombre:
            <input type="text" className="form-control" name="nombre" value={nombre} onChange={handleInputChange} />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Fecha de Nacimiento:
            <input
              type="date"
              className="form-control"
              name="fechaNacimiento"
              value={nacimiento}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarEmpleado;