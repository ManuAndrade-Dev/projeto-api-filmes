const express = require('express');
const router = express.Router();

// Importar as funções no Controlador
const movieController = require('../controllers/movieController');

// Definir os caminhos (endpoints) obrigatórios do projeto
// Cada caminho chama uma função específica do controlador

// Rota para Criar filme
router.post('/', movieController.createMovie);

// Rota para Listar filmes
router.get('/', movieController.getAllMovies);

// Rota para Atualizar filme por ID
router.put('/:id', movieController.updateMovie);

// Rota para Deletar filme por ID
router.delete('/:id', movieController.deleteMovie);

// Exportar as rotas para serem usadas no arquivo principal app.js
module.exports = router;