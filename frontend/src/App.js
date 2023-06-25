import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Inicio } from './components/Inicio';
import { Menu } from './components/Menu';
import  Empleados  from './components/empleado/Empleados';
import  AgregarEmpleado  from './components/empleado/AgregarEmpleado';
import  EditarEmpleado from './components/empleado/EditarEmpleado';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Menu />
          <div className="container">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/empleados" element={<Empleados />} />
              <Route path="/empleados/agregar" element={<AgregarEmpleado />} />
              <Route path="/empleados/editar/:legajo" element={<EditarEmpleado />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;