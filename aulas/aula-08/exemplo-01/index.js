import express from "express";
import ejs from "ejs";

const app = express();

app.get("/", (req, res) => {
    const hoje = new Date()
    const conteudo = ejs.render("Alo Mundo, hoje é <%= diaHora %>", {
        diaHora: hoje.toLocaleDateString() + " " + hoje.toLocaleTimeString()
    });
    res.send(conteudo);
});

app.listen(3000, () => {
console.log("Server iniciado na porta 3000!");
});