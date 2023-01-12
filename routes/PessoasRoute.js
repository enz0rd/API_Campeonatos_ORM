const express = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = express.Router()

router.get('/pessoas', PessoaController.listarPessoas)
router.put('/pessoas/:id', PessoaController.attPessoa)
router.get('/pessoas/:id', PessoaController.listarPessoaID)
router.post('/pessoas', PessoaController.addPessoa)
router.delete('/pessoas/:id', PessoaController.delPessoa)

module.exports = router