import express from "express";
import prisma from "./prisma-client-mariadb.js";

const app = express();

app.get("/doencas", async(req, res) => {
    const doencas = await prisma.doenca.findMany();
    res.json(doencas);
});

app.listen(3000, () => {
    console.log("Servidor iniciado");
});