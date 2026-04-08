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

app.listen(3000, () => {
    console.log("Server iniciado na porta 3000!");
});