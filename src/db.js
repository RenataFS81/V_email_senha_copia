var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // coloque a senha se você definiu uma
    database: 'login_system'
});
connection.connect(function (err) {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso!');
});
