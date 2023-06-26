import React from "react";

export default function TablaProveedores({ items, onModificar, onEliminar }) {
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
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Fecha ingreso</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log(items)}
                  {items.map((item) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.categoria}</td>
                        <td>{item.direccion}</td>
                        <td>{item.fecha_ingreso}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            title="Modificar"
                            onClick={() => onModificar(item)}
                          >
                            <i className="fa fa-pencil"></i>
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            title="Eliminar"
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