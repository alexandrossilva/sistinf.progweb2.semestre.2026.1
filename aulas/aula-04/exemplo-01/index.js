import { createServer } from "http";

const servidor = createServer((req, res) => {
    console.log(req.url);
    res.end("Alô Mundo");
});

servidor.listen(3000);