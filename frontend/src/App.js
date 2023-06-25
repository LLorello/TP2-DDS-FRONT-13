import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Inicio } from './components/Inicio';
import {Menu} from './components/Menu';



function App() {
  return (
    <div>

      <BrowserRouter>
          <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route exact path="/empleados" element={<Empleados />} />
              <Route exact path="/empleados/agregar" element={<AgregarEmpleado />} />
              <Route exact path="/empleados/editar/:legajo" element={<EditarEmpleado />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>


    </div>
  );
}

export default App;
