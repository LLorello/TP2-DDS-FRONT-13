import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';
import Clientes from './components/clientes/Clientes';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
          <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>


    </div>
  );
}

export default App;
