import express from "express";
import { ler, inserir, lerUm, atualizar, excluir } from "./src/aluno.js"
const app = express();
const porta = process.env.PORT || 3306;

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
    // res.send(`Visualizar um único aluno`);
    const id = parseInt(req.params.id);
    lerUm(id, res);
});

app.post('/alunos', (req, res) => {
    // res.send(`Inserir alunos`);
    const novoAluno = req.body;
    inserir(novoAluno, res);
});

app.patch('/alunos/:id', (req, res) => {
    // res.send(`Atualizar um aluno`);
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
});

app.delete('/alunos/:id', (req, res) => {
    // res.send(`Deletar um aluno`);
    const id = parseInt(req.params.id);
    excluir(id, res);
});

// Executando o servidor
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});