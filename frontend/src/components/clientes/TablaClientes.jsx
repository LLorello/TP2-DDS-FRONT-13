import React from "react";

export default function TablaClientes({ items, onModificar, onEliminar }) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Resultados:</h5>
          <div className="row">
            <div className="col-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Fecha Compra</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log(items)}
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.dni}</td>
                        <td>{item.fecha_compra}</td>
                        <td>{item.nombre}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            title="Modificar"
                            disabled={item.eliminado == 1}
                            onClick={() => onModificar(item)}
                          >
                            <i className="fa fa-pencil"></i>
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            title="Eliminar"
                            disabled={item.eliminado == 1}
                            onClick={() => {
                              if (
                                window.confirm("Seguro que desea eliminar?")
                              ) {
                                onEliminar(item.dni);
                              }
                            }}
                          >
                            <i className="fa fa-pencil"></i>
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
