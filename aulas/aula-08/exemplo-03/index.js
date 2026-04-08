import express from "express";
import ejs from "ejs";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const hoje = new Date();
    res.render("alo-mundo", {
        dia: hoje.toLocaleDateString(),
        horario: hoje.toLocaleTimeString()
    });
});

app.get("/sequencia-numeros", (req, res) => {
    const numeros = [1, 2, 3, 4, 5, 7, 9, 11, 13, 17];
    res.render("sequencia-numeros", {
        numeros: numeros
    });
});

app.listen(3000, () => {
    console.log("Server iniciado na porta 3000!");
});