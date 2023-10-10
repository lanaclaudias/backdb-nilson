const db = require('../config/database');

// Controlador para lidar com o envio do formulário
exports.enviarFormulario = (req, res) => {
    const { logemail, Nome, Cargo, nom_empresa, cidade, descricao } = req.body;
    
    const query = 'INSERT INTO tabela_contato (email, nome, cargo, nome_empresa, cidade, descricao) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [logemail, Nome, Cargo, nom_empresa, cidade, descricao], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Ocorreu um erro ao inserir os dados no banco de dados.' });
        } else {
            res.json({ message: 'Dados inseridos com sucesso.' });
        }
    });
};
