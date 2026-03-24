import { getNumerosRandomicos } from "./random.js";
import express from "express";

const QTD = 10;
const MIN = 1;
const MAX = 100;

const app = express();

app.get("/numeros-aleatorios", (req, res) => {
    res.send(getNumerosRandomicos(QTD, MIN, MAX));
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

app.listen(3000);