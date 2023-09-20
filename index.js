import express from "express";
import { ler, inserir } from "./src/aluno.js"
const app = express();
const porta = 8080;

// adicionando suporte ao formato json
app.use(express.json());

// adicionando suporte a dados vindos de formulários
app.use(express.urlencoded({ extended : true}))

// CRIANDO AS ROTAS

// Raiz da aplicação
app.get('/', (req, res) => {
    res.send(`Página inicial`);
});

app.get('/alunos', (req, res) => {
    // res.send(`Visualizar alunos`);
    ler(res);
});

app.get('/alunos/:id', (req, res) => {
    res.send(`Visualizar um único aluno`);
});

app.post('/alunos', (req, res) => {
    // res.send(`Inserir alunos`);
    const novoAluno = req.body;
    inserir(novoAluno, res);
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