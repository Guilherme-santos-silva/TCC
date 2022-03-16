const express = require('express')
const app = express();

/* acessando conexão */
const ConexaoMySql = require('./ConexaoMySql');

app.get("/", async (req, res) => {
    res.send("Página inicial TCC - Conexão");
});

/* cadastro */
app.post("/cadastrar", async (req, res) => {
    res.send("Página Cadastrar");
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})