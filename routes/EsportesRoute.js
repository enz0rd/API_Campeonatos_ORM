const express = require('express')
const EsporteController = require('../controllers/EsporteController.js')

const router = express.Router()

router.get('/esportes', EsporteController.listarEsportes)
router.put('/esportes/:id', EsporteController.attEsporte)
router.get('/esportes/:id', EsporteController.listarEsporteID)
router.post('/esportes', EsporteController.addEsporte)
router.delete('/esportes/:id', EsporteController.delEsporte)

module.exports = router