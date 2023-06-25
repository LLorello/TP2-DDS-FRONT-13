import React, { useEffect, useState } from "react";
import FiltroProductos from "./FiltroProductos";
import TablaProductos from "./TablaProductos";
import RegistrarProductos from "./RegistrarProductos";
import {
  getProductos,
  addProductos,
  updateProducto,
  deleteProducto,
} from "../services/productos.service.js";

function Productos() {
  const [lista, setLista] = useState([]);
  const [show, setShow] = useState(false);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    cargarDatos();
  }, []);

  async function cargarDatos() {
    setLista(await getProductos());
  }

  async function onBuscar(props) {
    const data = await getProductos(props.nombre);
    setLista(data);
  }

  async function onRegistrar() {
    setProducto();
    setShow(true);
  }

  async function onCancelar() {
    setProducto();
    setShow(false);
  }

  async function onModificar(e) {
    setProducto(e);
    setShow(true);
  }

  async function onConfirmar(data) {
    await addProductos(data);
    setLista(await getProductos());
    setProducto();
    setShow(false);
  }

  async function onGuardar(data) {
    await updateProducto(data);
    setLista(await getProductos());
    setProducto();
    setShow(false);
  }

  async function onEliminar(data) {
    if (window.confirm("Desea eliminar el producto " + data.nombre)) {
      await deleteProducto(data);
      setProducto();
      setLista(await getProductos());
    }
  }

  const registrarProductos = () => {
    return (
      <RegistrarProductos
        titulo={producto == null ? "Nuevo Producto" : "Modificar Producto"}
        show={show}
        onConfirmar={producto == null ? onConfirmar : onGuardar}
        onCancelar={onCancelar}
        producto={producto}
      />
    );
  };

  return (
    <>
      <div>
        <FiltroProductos onBuscar={onBuscar} onRegistrar={onRegistrar} />
        <TablaProductos
          lista={lista}
          onModificar={onModificar}
          onEliminar={onEliminar}
        />
        {show && registrarProductos()}
      </div>
    </>
  );
}

export default Productos;
