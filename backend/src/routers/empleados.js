const Router = require('express')
const Empleado = require("../models/empleados.js")

const routerEmpleados = Router();

routerEmpleados.get('/', async (req,res) => {
    const empleado = await Empleado.findAll({})
    res.status(200)
    res.json(empleado)
})

routerEmpleados.get('/:legajo', async (req, res) => {
    const { legajo } = req.params;
    try {
      const empleado = await Empleado.findOne({ where: { legajo } });
      if (empleado) {
        res.json(empleado);
      } else {
        res.status(404).json({ mensaje: 'Empleado no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener el empleado' });
    }
  });

routerEmpleados.post('/', async (req, res) => {
    const { legajo, nombre, nacimiento } = req.body;

    try {
        // Crear un nuevo empleado en la base de datos
        const empleado = await Empleado.create({ legajo, nombre, nacimiento });

        // Devolver el nuevo empleado creado
        res.status(201).json(empleado);
    } catch (error) {
        // Ocurrió un error durante la creación del empleado
        res.status(500).json({ error: 'Error al crear el empleado' });
    }
});

routerEmpleados.put('/:legajo', async (req, res) => {
    const { nombre, nacimiento } = req.body;

    try {
        // Buscar el empleado por su legajo en la base de datos
        const empleado = await Empleado.findOne({ where: { legajo: req.params.legajo } });

        if (empleado) {
            // Actualizar los datos del empleado
            empleado.nombre = nombre;
            empleado.nacimiento = nacimiento;
            await empleado.save();

            // Devolver el empleado actualizado
            res.json(empleado);
        } else {
            // No se encontró el empleado
            res.status(404).json({ error: 'Empleado no encontrado' });
        }
    } catch (error) {
        // Ocurrió un error durante la actualización del empleado
        res.status(500).json({ error: 'Error al actualizar el empleado' });
    }
});


routerEmpleados.delete('/:legajo', async (req, res) => {
    try {
        // Buscar el empleado por su legajo en la base de datos
        const empleado = await Empleado.findOne({ where: { legajo: req.params.legajo } });

        if (empleado) {
            // Eliminar el empleado de la base de datos
            await empleado.destroy();

            // Devolver mensaje de éxito
            res.json({ message: 'Empleado eliminado correctamente' });
        } else {
            // No se encontró el empleado
            res.status(404).json({ error: 'Empleado no encontrado' });
        }
    } catch (error) {
        // Ocurrió un error durante la eliminación del empleado
        res.status(500).json({ error: 'Error al eliminar el empleado' });
    }
});

module.exports = routerEmpleados