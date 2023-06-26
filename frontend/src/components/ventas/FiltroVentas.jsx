import React from "react";
import { useForm } from "react-hook-form";

function FiltroVentas({ onBuscar, onRegistrar }) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onBuscar)}>
                <h5 className="card-title">Filtros</h5>
                <div className="row">
                  <div className="col-auto">ID</div>
                  <div className="col-auto">
                    <input
                      type="text"
                      placeholder="id"
                      {...register("id")}
                    />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-3">
                    <button type="submit" className="btn btn-success w-100">
                      Consultar
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      onClick={() => {
                        onRegistrar();
                      }}
                      type="button"
                      className="btn btn-warning w-100"
                    >
                      Nueva
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltroVentas;