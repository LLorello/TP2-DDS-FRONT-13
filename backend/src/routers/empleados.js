const Router = require('express')
const Empleado = require("../models/empleados")

const routerEmpleados = Router();

routerEmpleados.delete('/:legajo', async (req,res) => {
    const empleado = await Empleado.findOne({
        where: {
            legajo:req.params.legajo
        }
    });
    res.json(empleado)
    if (empleado){
        await empleado.destroy();
    }
})

module.exports = routerEmpleados