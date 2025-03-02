"use strict";
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // coloque a senha se você definiu uma
    database: 'login_system'
});
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar: ' + err.message);
    }
    else {
        console.log('Conexão bem-sucedida!');
    }
});
