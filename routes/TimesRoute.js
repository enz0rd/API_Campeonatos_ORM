const express = require('express')
const TimeController = require('../controllers/TimeController.js')

const router = express.Router()

router.get('/times', TimeController.listarTimes)
router.put('/times/:id', TimeController.attTime)
router.get('/times/:id', TimeController.listarTimeID)
router.post('/times', TimeController.addTime)
router.delete('/times/:id', TimeController.delTime)

module.exports = router