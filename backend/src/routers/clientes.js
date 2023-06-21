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
        console.log(req.body)
        const cliente = await clientesService.editarCliente(req.body)
        return res.json(cliente);
    } catch (err) {
        console.error(err);
    }
})
/*

routerCliente.delete("/api/clientes", async (req, res) => {
    try {
        const { Id } = req.query
        const pelicula = await peliculasService
            .eliminarPelicula(Id)
        return res.json(pelicula);
    } catch (err) {
        if (err instanceof ResourceNotFound)
            return res.status(err.status)
                .json({ error: err.message })
        if (err instanceof ValidationError) {
            return res.status(400)
                .json({ error: err.message })
        }
        return res.status(500)
            .json({ error: 'Error imprevisto. Intente nuevamente' })
    }
})
*/

module.exports = routerCliente
