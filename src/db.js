var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // coloque a senha se você definiu uma
    database: 'login_system'
});
connection.connect(function (err) {
    if (err) {
        coimport mysql from 'mysql2';
        import bcrypt from 'bcrypt';
        
        // Conexão com o banco de dados
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '', // coloque a senha se houver
            database: 'login_system'
        });
        
        connection.connect((err) => {
            if (err) {
                console.error('Erro ao conectar ao banco de dados:', err);
                return;
            }
            console.log('Conectado ao banco de dados com sucesso!');
        });
        
        export default class Database {
            static async emailJaCadastrado(email: string): Promise<boolean> {
                return new Promise((resolve, reject) => {
                    connection.query(
                        'SELECT COUNT(*) AS count FROM users WHERE email = ?',
                        [email],
                        (err, results) => {
                            if (err) return reject(err);
                            resolve(results[0].count > 0);
                        }
                    );
                });
            }
        
            static async cadastrarUsuario(
                nome: string,
                sobrenome: string,
                email: string,
                telefone: string,
                senha: string
            ): Promise<boolean> {
                if (await this.emailJaCadastrado(email)) {
                    return false; // E-mail já existe
                }
        
                // Criptografa a senha antes de salvar
                const senhaHash = await bcrypt.hash(senha, 10);
        
                return new Promise((resolve, reject) => {
                    connection.query(
                        'INSERT INTO users (nome, sobrenome, email, telefone, senha) VALUES (?, ?, ?, ?, ?)',
                        [nome, sobrenome, email, telefone, senhaHash],
                        (err) => {
                            if (err) return reject(err);
                            resolve(true);
                        }
                    );
                });
            }
        }
        nsole.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso!');
});
