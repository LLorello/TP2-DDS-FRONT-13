import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

function RegistrarProductos({
  show,
  onConfirmar,
  onCancelar,
  producto = {},
  titulo,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: producto });

  return (
    <div className="modal show p-4">
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="form-registro" onSubmit={handleSubmit(onConfirmar)}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre(*):</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                {...register("nombre", {
                  required: "se requiere un nombre",
                })}
              />
              {errors.nombre && <p>{errors.nombre.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="precio">Precio(*):</label>
              <input
                type="text"
                className="form-control"
                id="precio"
                {...register("precio", {
                  required: "se requiere un Precio",
                })}
              />
              {errors.precio && <p>{errors.precio.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="vencimiento">Vencimiento(*):</label>
              <input
                type="text"
                className="form-control"
                id="vencimiento"
                {...register("vencimiento", {
                  required: "se requiere fecha de vencimiento",
                })}
              />
              {errors.vencimiento && <p>{errors.vencimiento.message}</p>}
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
export default RegistrarProductos;

/*
    Para Tener Botones Inferiores
        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Modal.Footer>

        
  Para tener un boton superior
  <Modal show={show} onHide={modalClose}>
      <Modal.Header closeButton>

            <div className="row d-flex flex-row-reverse">
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
*/
