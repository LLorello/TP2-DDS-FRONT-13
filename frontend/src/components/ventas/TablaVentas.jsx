import React from "react";

function TablaVentas({ lista, onModificar, onEliminar }) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Resultados:</h5>
          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col-auto">ID</th>
                    <th scope="col-auto">Fecha de Venta</th>
                    <th scope="col-auto">Tipo de Factura</th>
                  </tr>
                </thead>
                <tbody>
                  {lista.map((e) => {
                    return (
                      <tr>
                        <td>{e.id}</td>
                        <td>{e.fechaVenta}</td>
                        <td>{e.tipoFactura}</td>
                        <td>
                          <button
                            className="btn btn-info btn-sm"
                            onClick={() => {
                              onModificar(e);
                            }}
                          >
                            M
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                              onEliminar(e);
                            }}
                          >
                            E
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablaVentas;
