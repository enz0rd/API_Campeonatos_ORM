const bodyParser = require('body-parser')
const pessoas = require('./PessoasRoute.js')
const esportes = require('./EsportesRoute.js')
const times = require('./TimesRoute.js')
const partidas = require('./PartidasRoute.js')

const routes = app => {
    app.use(bodyParser.json())
    app.use(esportes,
        pessoas,
        times,
        partidas
        )
}

module.exports = routes