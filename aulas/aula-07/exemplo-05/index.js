import express from 'express';
import { criarUsuario, listarUsuarios } from './controllers/usuario.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/usuarios', listarUsuarios);
app.post('/usuarios', criarUsuario);

app.listen(3000, () => {
    console.log('Servidor iniciado!');
})