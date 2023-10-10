const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',  // Endereço do banco de dados
    user: 'root',  // Nome de usuário do banco de dados
    password: 'root',  // Senha do banco de dados
    database: 'backc'  // Nome do banco de dados
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida.');
});

module.exports = db;
