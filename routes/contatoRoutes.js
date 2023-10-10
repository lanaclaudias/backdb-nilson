const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');

// Rota para lidar com o envio do formulário de contato
router.post('/enviar', contatoController.enviarFormulario);

module.exports = router;
