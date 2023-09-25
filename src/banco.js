import mysql2 from 'mysql2';

/* // Armazenando os dados da conexão em uma constante
const conexao = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'escola'
}); */

// BANCO DE DADOS DB4FREE
const conexao = mysql2.createConnection({
    host : 'db4free.net',
    user : 'slothsenac',
    password : 'Senac*123',
    database : 'apiescolasloth'
});

// Efetivando a conexão
conexao.connect(erro => {
    if(erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}`);
    }
});

export default conexao;