import React, { useEffect, useState } from "react";
import FiltroVentas from "./FiltroVentas";
import TablaVentas from "./TablaVentas";
import RegistrarVentas from "./RegistrarVentas";
import {
    getVentas,
    addVentas,
    updateVenta,
    deleteVenta
} from "../../services/ventas.service";

function Ventas() {
  const [lista, setLista] = useState([]);
  const [show, setShow] = useState(false);
  const [venta, setVenta] = useState({});

  useEffect(() => {
    cargarDatos();
  }, []);

  async function cargarDatos() {
    setLista(await getVentas());
  }

  async function onBuscar(props) {
    // Las ventas no tienen nombre. Buscar por id
    const data = await getVentas(props.id);
    setLista(data);
  }

  async function onRegistrar() {
    setVenta();
    setShow(true);
  }

  async function onCancelar() {
    setVenta();
    setShow(false);
  }

  async function onModificar(e) {
    setVenta(e);
    setShow(true);
  }

  async function onConfirmar(data) {
    await addVentas(data);
    setLista(await getVentas());
    setVenta();
    setShow(false);
  }

  async function onGuardar(data) {
    await updateVenta(data);
    setLista(await getVentas());
    setVenta();
    setShow(false);
  }

  async function onEliminar(data) {
    if (window.confirm("Desea eliminar la venta " + data.id)) {
      await deleteVenta(data);
      setVenta();
      setLista(await getVentas());
    }
  }

  const registrarVentas = () => {
    return (
      <RegistrarVentas
        titulo={venta == null ? "Nueva Venta" : "Modificar Venta"}
        show={show}
        onConfirmar={venta == null ? onConfirmar : onGuardar}
        onCancelar={onCancelar}
        venta={venta}
      />
    );
  };

  return (
    <>
      <div>
        <FiltroVentas onBuscar={onBuscar} onRegistrar={onRegistrar} />
        <TablaVentas
          lista={lista}
          onModificar={onModificar}
          onEliminar={onEliminar}
        />
        {show && registrarVentas()}
      </div>
    </>
  );
}

export default Ventas;