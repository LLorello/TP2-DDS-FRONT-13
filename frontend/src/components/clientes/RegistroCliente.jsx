import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegistroCliente({ onCancelar, onConfirmar, item }) {
  const [dni, setDni] = useState("");
  const [fecha_compra, setFechaCompra] = useState("");
  const [nombre, setNombre] = useState("");

  const {
    register,
    handleSubmit,
  } = useForm({ values: item });

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {item == null ? "Nuevo Cliente:" : "Editar Cliente:"}
          </h5>
          <form onSubmit={handleSubmit(onConfirmar)}>
            <div className="form-group">
              <label htmlFor="dni">DNI(*):</label>
              <input
                type="text"
                className="form-control"
                id="dni"
                onChange={(e) => {
                  setDni(e.target.value);
                }}
                {...register("dni", {
                  required: "El campo DNI es requerido!",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fecha_compra">Fecha Compra(*):</label>
              <input
                type="text"
                className="form-control"
                id="fecha_compra"
                onChange={(e) => {
                  setFechaCompra(e.target.value);
                }}
                {...register("fecha_nombre", {
                  required: "El campo Fecha Compra es requerido!",
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
            <div className="btn-group">
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

