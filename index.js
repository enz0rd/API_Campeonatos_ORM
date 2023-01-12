const express = require('express')
const routes = require('./routes/index.js')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => {
    console.clear()
    console.log(`Servidor rodando na porta ${port}`)
})

module.exports = app