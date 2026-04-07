import { getNumerosRandomicos } from "./random.js";
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
    const tipoResposta = req.query.tipoResposta;
    
    qtd = !qtd ? QTD : parseInt(qtd);

    const numeros = getNumerosRandomicos(qtd, MIN, MAX);

    console.log(`Números aleatórios: ${numeros}`);

    let resposta;
    let soma;

    switch(tipoResposta) {
        case "lista":
            resposta = numeros;
            break;
        case "soma":
            soma = 0;

            for (let i = 0; i < numeros.length; i++) {
                soma += numeros[i];
            }

            resposta = soma;
            break;
        case "media":
            soma = 0;

            for (let i = 0; i < numeros.length; i++) {
                soma += numeros[i];
            }

            resposta = soma / numeros.length;
            break;
    }

    res.send(resposta);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});