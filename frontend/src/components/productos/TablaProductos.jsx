import React from "react";

function TablaProductos({ lista, onModificar, onEliminar }) {
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
                    <th scope="col-auto">Nombre</th>
                    <th scope="col-auto">Precio</th>
                    <th scope="col-auto">Vencimiento</th>
                  </tr>
                </thead>
                <tbody>
                  {lista.map((e) => {
                    return (
                      <tr>
                        <td>{e.id}</td>
                        <td>{e.nombre}</td>
                        <td>{e.precio}</td>
                        <td>{e.vencimiento}</td>
                        <td className="btn-group button-group">
                          <button
                            className="btn btn-info"
                            onClick={() => {
                              onModificar(e);
                            }}
                          >
                            M
                          </button>

                          <button
                            className="btn btn-danger"
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

export default TablaProductos;
