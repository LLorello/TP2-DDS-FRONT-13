import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

function RegistrarVentas({
  show,
  onConfirmar,
  onCancelar,
  venta = {},
  titulo,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: venta });

  return (
    <div className="modal show p-4">
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="form-registro" onSubmit={handleSubmit(onConfirmar)}>
            <div className="form-group">
              <label htmlFor="fechaVenta">Fecha de Venta(*):</label>
              <input
                type="text"
                className="form-control"
                id="fechaVenta"
                {...register("fechaVenta", {
                  required: "se requiere una fecha",
                })}
              />
              {errors.fechaVenta && <p>{errors.fechaVenta.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="tipoFactura">Tipo de Factura(*):</label>
              <input
                type="text"
                className="form-control"
                id="tipoFactura"
                {...register("tipoFactura", {
                  required: "se requiere un tipo de factura",
                })}
              />
              {errors.tipoFactura && <p>{errors.tipoFactura.message}</p>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCancelar}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit" form="form-registro">
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default RegistrarVentas;
