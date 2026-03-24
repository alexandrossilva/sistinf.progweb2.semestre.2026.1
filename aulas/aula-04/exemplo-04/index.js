import { createServer } from "http";
import { readFile } from "fs";

const servidor = createServer((req, res) => {
    console.log(req.url);

    let nomeArquivo = "";

    switch(req.url) {
        case "/":         nomeArquivo = "index.html"; break;
        case "/ingles":   nomeArquivo = "index-ingles.html"; break;
        case "/espanhol": nomeArquivo = "index-espanhol.html";
    }

    if (nomeArquivo == "") {
        res.writeHead(404);
        res.end();
    }
    else {
        readFile(nomeArquivo, (erro, dados) => {
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            res.end(dados);
        });
    }
});

servidor.listen(3000);