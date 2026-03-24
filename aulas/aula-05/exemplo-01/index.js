import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Alô Mundo!");
});

app.get("/ingles", (req, res) => {
    res.send("Hello World!");
});

app.get("/espanhol", (req, res) => {
    res.send("Hola Mundo!");
});

app.listen(3000);