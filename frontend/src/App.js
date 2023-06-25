import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Productos from './components/productos/Productos';
import Ventas from './components/ventas/Ventas';

function App() {
  return (
    <div>

      <BrowserRouter>
          <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/ventas" element={<Ventas />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>


    </div>
  );
}

export default App;
