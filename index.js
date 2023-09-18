import express from "express";
const app = express();
const porta = 8080;

// CRIANDO AS ROTAS

// Raiz da aplicação
app.get('/', (req, res) => {
    res.send(`Página inicial`);
});

app.get('/alunos', (req, res) => {
    res.send(`Visualizar alunos`);
});

app.get('/alunos/:id', (req, res) => {
    res.send(`Visualizar um único aluno`);
});

app.post('/alunos', (req, res) => {
    res.send(`Inserir alunos`);
});

app.patch('/alunos/:id', (req, res) => {
    res.send(`Atualizar um aluno`);
});

app.delete('/alunos/:id', (req, res) => {
    res.send(`Deletar um aluno`);
});

// Executando o servidor
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});