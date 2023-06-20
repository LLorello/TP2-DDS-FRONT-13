const express = require('express')
const routerCliente = require('./routers/clientes')
const routerProductos = require('./routers/productos')
const routerEmpleados = require('./routers/empleados')
const routerVentas = require('./routers/ventas')
const routerProveedores = require('./routers/proveedores')


const app = express();
app.use(express.json())


app.use('/', routerCliente)
app.use('/api/productos',routerProductos)
app.use('/api/empleados',routerEmpleados)
app.use('/api/ventas',routerVentas)
app.use('/api/proveedores', routerProveedores)

module.exports = app