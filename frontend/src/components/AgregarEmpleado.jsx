import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AgregarEmpleado = () => {
  const [legajo, setLegajo] = useState('');
  const [nombre, setNombre] = useState('');
  const [nacimiento, setFechaNacimiento] = useState('');
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'legajo') {
      setLegajo(value);
    } else if (name === 'nombre') {
      setNombre(value);
    } else if (name === 'nacimiento') {
      setFechaNacimiento(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const empleado = { legajo, nombre, nacimiento };
    try {
      await axios.post('http://localhost:3001/api/empleados', empleado);
      alert('Empleado agregado exitosamente');
      navigate('/empleados');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Agregar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" name="nombre" value={nombre} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="legajo" className="form-label">Legajo</label>
          <input type="text" className="form-control" name="legajo" value={legajo} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="nacimiento" className="form-label">Fecha de Nacimiento</label>
          <input type="date" className="form-control" name="nacimiento" value={nacimiento} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </div>
  );

  return (
    <div>
      <h2>Agregar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Legajo:
          <input type="text" name="legajo" value={legajo} onChange={handleInputChange} />
        </label>
        <label>
          Nombre:
          <input type="text" name="nombre" value={nombre} onChange={handleInputChange} />
        </label>
        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            name="nacimiento"
            value={nacimiento}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};
export default AgregarEmpleado;