const app = require("./index")
const sequelize = require("./data/config")

app.listen(3001, async () => {
    console.log('Server on PORT 3001...')
    await sequelize.sync()
    console.log("base datos sincronizada...")
})