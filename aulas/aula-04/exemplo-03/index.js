import { createServer } from "http";
import { readFile } from "fs";

const servidor = createServer((req, res) => {
    console.log(req.url);
    readFile("index.html", (erro, dados) => {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.end(dados);
    });
});

servidor.listen(3000);