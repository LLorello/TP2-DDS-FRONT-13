import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LegajoForm from './LegajoForm';
import TablaEmpleados from './TablaEmpleados';
import AgregarEmpleado from './AgregarEmpleado';
import EditarEmpleado from './EditarEmpleado';

const Empleados = () => {
  return (
    <div>
      <h1 className='text-center'>Empleados</h1>
      <Routes>
        <Route exact path="/empleados" element={LegajoForm} />
        <Route path="/empleados/agregar" element={AgregarEmpleado} />
        <Route path="/empleados/editar/:legajo" element={EditarEmpleado} />
      </Routes>
      <TablaEmpleados />
    </div>
  );
};

export default Empleados;