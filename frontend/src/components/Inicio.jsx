import React from "react";

function Inicio() {
  return (
    <div className="container"> 
      <h1 style={{padding: "5px"}}>Bienvenido</h1>
      <hr />
      <div
        className="mt-4 p-5 rounded"
        style={{ backgroundColor: "lightgray" }}
      >
        <h1>TP ENTREGA 2 DDS</h1>
        <p>UTN - FRC</p>
      </div>

      <div 
      className="mt-4 p-5 rounded"
      style={{ backgroundColor: "lightgray" }}
      >
        <h2 style={{padding: "5px"}}>Grupo N°13:</h2>
        <ul>
          <li>Dani</li>
          <li>Maxi</li>
          <li>Agus</li>
          <li>Leo</li>
          <li>Luciano</li>
        </ul>
      </div>
    </div>
  );
}

export { Inicio };