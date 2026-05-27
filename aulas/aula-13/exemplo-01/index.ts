import express from "express";
import ejs from "ejs";
import prisma from "./prisma-client-mariadb.js";

const app = express();

app.set("view engine", "ejs");

app.get("/cursos", async (req, res) => {
    const cursos = await prisma.curso.findMany();
    res.render("cursos", { cursos: cursos });
});

app.listen(3000, () => {
    console.log("Servidor iniciado");
})
