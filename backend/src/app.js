const app = require("./index")
const sequelize = require("./data/config")

app.listen(4000, async () => {
    console.log('Server on PORT 4000...')
    await sequelize.sync()
    console.log("base datos sincronizada...")
})