import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LegajoForm = () => {
  const [legajo, setLegajo] = useState('');
  const history = useNavigate;

  const handleInputChange = (event) => {
    setLegajo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/empleados/${legajo}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ingresar Legajo:
          <input type="text" value={legajo} onChange={handleInputChange} />
        </label>
        <button type="submit">Buscar Empleado</button>
      </form>
    </div>
  );
};

export default LegajoForm;
