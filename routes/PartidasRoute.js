const express = require('express')
const PartidaController = require('../controllers/PartidaController.js')

const router = express.Router()

router.get('/partidas', PartidaController.listarPartidas)
router.put('/partidas/:id', PartidaController.attPartida)
router.get('/partidas/:id', PartidaController.listarPartidaID)
router.post('/partidas', PartidaController.addPartida)
router.delete('/partidas/:id', PartidaController.delPartida)

module.exports = router