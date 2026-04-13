// 1. Armazenamento em memória (estrutura local)
let movies = [];

// Função auxiliar para encontrar um filme pelo ID
const findMovieById = (id) => movies.find(m => m.id === parseInt(id));

// 2. Implementação das funções do Controlador

// Listar todos os filmes (GET /movies)
const getAllMovies = (req, res) => {
    res.json(movies);
};

// Criar um novo filme (POST /movies)
const createMovie = (req, res) => {
    const { title, description, year, genres, image, video } = req.body;

    // Validação básica de dados
    if (!title || !description) {
        return res.status(400).json({ message: "Título e descrição são obrigatórios." });
    }

    // Criando o objeto com os atributos obrigatórios
    const newMovie = {
        id: movies.length + 1,
        title,
        description,
        year,
        genres,
        image,
        video
    };

    movies.push(newMovie);
    res.status(201).json(newMovie);
};

// Atualizar um filme existente (PUT /movies/:id)
const updateMovie = (req, res) => {
    const { id } = req.params;
    const movie = findMovieById(id);

    if (!movie) {
        return res.status(404).json({ message: "Filme não encontrado." });
    }

    // Atualiza os campos enviados na requisição
    const { title, description, year, genres, image, video } = req.body;
    
    movie.title = title || movie.title;
    movie.description = description || movie.description;
    movie.year = year || movie.year;
    movie.genres = genres || movie.genres;
    movie.image = image || movie.image;
    movie.video = video || movie.video;

    res.json(movie);
};

// Deletar um filme (DELETE /movies/:id)
const deleteMovie = (req, res) => {
    const { id } = req.params;
    const movieIndex = movies.findIndex(m => m.id === parseInt(id));

    if (movieIndex === -1) {
        return res.status(404).json({ message: "Filme não encontrado." });
    }

    // Remove o filme do array
    movies.splice(movieIndex, 1);
    res.status(204).send();
};

// Exportando as funções para serem usadas nas rotas
module.exports = {
    getAllMovies,
    createMovie,
    updateMovie,
    deleteMovie
};