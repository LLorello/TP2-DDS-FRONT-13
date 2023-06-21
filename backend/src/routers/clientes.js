const Router = require("express")
const clientesService = require("../service/clientes.service.js") ;
const routerCliente = Router();

routerCliente.get("/api/clientes", async (req, res) => {
    const clientes = await clientesService.getClientes(req.query);
    res.json(clientes);
})


routerCliente.post('/api/clientes', async (req, res) => {
    const cliente = await clientesService.insertarCliente(req.body)
    return res.json(cliente);
});

routerCliente.put("/api/clientes", async (req, res) => {
    try {
        const cliente = await clientesService.editarCliente(req.body)
        return res.json(cliente);
    } catch (err) {
        console.error(err);
    }
})

routerCliente.delete("/api/clientes", async (req, res) => {
    try {
        const { dni } = req.query
        const cliente = await clientesService.eliminarCliente(dni)
        return res.json(cliente);
    } catch (err) {
        console.error(err);
    }
})


module.exports = routerCliente
