const express = require('express');
const app = express();

// Importamos as rotas que acabamos de criar
const movieRoutes = require('./src/routes/movieRoutes');

// Configuração para o Express entender dados em formato JSON
app.use(express.json());

// Definimos que todas as rotas de filmes começarão com /movies
app.use('/movies', movieRoutes);

// O servidor vai rodar na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse http://localhost:${PORT}/movies para ver os filmes`);
});