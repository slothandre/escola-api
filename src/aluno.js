import conexao from "./banco.js";

// CRUD

// LER/EXIBIR todos os alunos do banco de dados
function ler(res) {
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados) => {
        if(resultados.length === 0){
            res.status(204).end(); // É importante trabalhar com os status http. .end() encerra a execução.
            return;
        }
        if(erro){
            res.status(400).json(erro.code); // BAD Request
        } else {
            res.status(200).json(resultados);
        };
    })
}

// INSERINDO alunos no banco de dados
function inserir(aluno, res) {
    const sql = "INSERT INTO alunos SET ?";
    conexao.query(sql, aluno, (erro) => {
        if(erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({ "Status" : "Aluno inserido"});
        };
    });
}

// LER UM ALUNO
function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) => {
        if(resultados === 0){
            res.status(204).end();
            return;
        }
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados);
        }
    })
}

export { ler, inserir, lerUm };