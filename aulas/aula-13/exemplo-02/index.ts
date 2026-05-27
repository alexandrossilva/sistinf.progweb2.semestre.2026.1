import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import session from "express-session";
import prisma from "./prisma-client-mariadb.js";

const app = express();

app.set("view engine", "ejs");

app.use(session({
    secret: 'ifba',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    console.log(req.url);
    if (req.url != "/login.html" && req.url != "/login" && !req.session.usuario) {
        res.redirect("/login.html");
    }
    else {
        next();
    }
});

app.use(bodyParser.urlencoded({extended: true}))

app.use("/", express.static("public"))

app.get("/cursos", async (req, res) => {
    const cursos = await prisma.curso.findMany();
    res.render("cursos", { cursos: cursos });
});

app.post("/login", (req, res) => {
    if (req.body.login == "admin" && req.body.senha == "admin") {
        req.session.usuario = "admin";
        res.redirect("/index.html");
    }
    else {
        res.redirect("/login.html");
    }
});

app.listen(3000, () => {
    console.log("Servidor iniciado");
})
