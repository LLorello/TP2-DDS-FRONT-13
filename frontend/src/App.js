import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';
import Clientes from './components/clientes/Clientes';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Productos from './components/productos/Productos';
import Ventas from './components/ventas/Ventas';
import React from 'react';
import  Empleados  from './components/empleado/Empleados';
import  AgregarEmpleado  from './components/empleado/AgregarEmpleado';
import  EditarEmpleado from './components/empleado/EditarEmpleado';
import Proveedores from './components/proveedores/Proveedores';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Menu />
          <div className="container">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/ventas" element={<Ventas />} />
              <Route path="/empleados" element={<Empleados />} />
              <Route path="/empleados/agregar" element={<AgregarEmpleado />} />
              <Route path="/empleados/editar/:legajo" element={<EditarEmpleado />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/proveedores" element={<Proveedores />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;