import express from "express";
import mysql from "mysql";

const app = express();

app.get("/usuarios", (req, res) => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "ifba"
    });
    
    connection.connect((err) => {
        if (err) {
            console.error("Erro ao conectar ao banco de dados:", err);
        }
        else {
            console.log("Conexão bem-sucedida ao banco de dados MySQL");
        }
    });

    connection.query("SELECT * FROM Usuario", (err, results) => {
        if (err) {
            console.error("Erro ao executar a consulta:", err);
            res.status(500).json({ error: "Erro ao buscar usuários" });
        }
        else {
            res.json(results);
        }

        connection.end();
    });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});