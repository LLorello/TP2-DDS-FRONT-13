import logo from './logo.svg';
import './App.css';
import {Menu} from './components/Menu';
import { Inicio } from './components/Inicio';
import Peliculas from './components/Peliculas';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
          <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/peliculas" element={<Peliculas />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </BrowserRouter>


    </div>
  );
}

export default App;
