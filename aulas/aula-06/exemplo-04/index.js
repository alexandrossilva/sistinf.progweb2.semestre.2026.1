import { getNumerosRandomicos } from "./random.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";

const QTD = 10;
const MIN = 1;
const MAX = 100;

const app = express();

app.get("/numeros-aleatorios", (req, res) => {
    let qtd = req.query.qtd;
    
    qtd = !qtd ? QTD : parseInt(qtd);

    res.send(getNumerosRandomicos(qtd, MIN, MAX));
});

app.get("/numeros-aleatorios.html", (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    console.log(`URL deste arquivo de script: ${import.meta.url}`);
    console.log(`Caminho absoluto deste arquivo de script: ${__filename}`);
    console.log(`Diretório deste arquivo de script: ${__dirname}`);

    res.sendFile(__dirname + "/public/numeros-aleatorios.html");
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