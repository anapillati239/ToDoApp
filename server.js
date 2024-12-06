// Importa o Express
const express = require('express');
const app = express();

// Define a porta
const PORT = 3000;

// Middleware para interpretar JSON (opcional para APIs REST)
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao backend do ToDoApp!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
