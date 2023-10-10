const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuração do banco de dados
const db = require('./config/database');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas
const contatoRoutes = require('./routes/contatoRoutes');
app.use('/contato', contatoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
