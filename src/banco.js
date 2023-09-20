import mysql2 from 'mysql2';

// Armazenando os dados da conexão em uma constante
const conexao = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'escola'
});

// Efetivando a conexão
conexao.connect(erro => {
    if(erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado com sucesso!`);
    }
});

export default conexao;