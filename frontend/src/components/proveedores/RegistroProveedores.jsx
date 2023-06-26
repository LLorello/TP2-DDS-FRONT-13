import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegistroProveedores({ onCancelar, onConfirmar, item }) {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha_ingreso, setFechaIngreso] = useState("");

  const {
    register,
    handleSubmit,
  } = useForm({ values: item });

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {item == null ? "Nuevo Proveedor:" : "Editar Proveedor:"}
          </h5>
          <form onSubmit={handleSubmit(onConfirmar)}>
            <div className="form-group">
              <label htmlFor="id">ID(*):</label>
              <input
                type="text"
                className="form-control"
                id="id"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                {...register("id", {
                  required: "El campo ID es requerido!",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre(*):</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                {...register("nombre", {
                  required: "El campo Nombre es requerido!",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="categoria">Categoria(*):</label>
              <input
                type="text"
                className="form-control"
                id="categoria"
                onChange={(e) => {
                  setCategoria(e.target.value);
                }}
                {...register("categoria", {
                  required: "El campo Categoria es requerido!",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Direccion(*):</label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                onChange={(e) => {
                  setDireccion(e.target.value);
                }}
                {...register("direccion", {
                  required: "El campo Direccion es requerido!",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fecha_ingreso">Fecha ingreso(*):</label>
              <input
                type="text"
                className="form-control"
                id="fecha_ingreso"
                onChange={(e) => {
                  setFechaIngreso(e.target.value);
                }}
                {...register("fecha_ingreso", {
                  required: "El campo Fecha Ingreso es requerido!",
                })}
              />
            </div>
            <div className="btn-group button-group">
              <button type="submit" className="btn btn-primary">
                Aceptar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  onCancelar();
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

