import { createServer } from "http";

const servidor = createServer((req, res) => {
    console.log(req.url);
    res.setHeader("Content-Type", "text/plain; charset=utf-8")
    res.end("Alô Mundo");
});

servidor.listen(3000);