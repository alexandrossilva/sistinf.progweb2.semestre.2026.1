import { getNumerosRandomicos } from "./random.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";

const QTD = 10;
const MIN = 1;
const MAX = 100;

const app = express();

app.use((req, res, next) => {
    console.log(`Requisição às ${new Date().toLocaleString()}: ${req.method} ${req.url}`);
    next();
});

app.use(express.static("public"));

app.get("/numeros-aleatorios", (req, res) => {
    let qtd = req.query.qtd;
    
    qtd = !qtd ? QTD : parseInt(qtd);

    res.send(getNumerosRandomicos(qtd, MIN, MAX));
});

app.get("/soma-numeros-aleatorios", (req, res) => {
    const numeros = getNumerosRandomicos(QTD, MIN, MAX);

    console.log(`Números: ${numeros}`);
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    res.send(soma);
});

app.get("/media-numeros-aleatorios", (req, res) => {
    const numeros = getNumerosRandomicos(QTD, MIN, MAX);

    console.log(`Números: ${numeros}`);
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    } 

    res.send(soma / numeros.length);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});