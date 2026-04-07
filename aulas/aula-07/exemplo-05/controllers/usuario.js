import { getUsuarios, saveUsuario } from '../services/usuario.js';

const listarUsuarios = (req, res) => {
    const usuarios = getUsuarios();
    res.json(usuarios);
}

const criarUsuario = (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    saveUsuario(nome, email);

    res.status(201);
    res.json({ message: 'Usuário criado com sucesso' });
}

export { listarUsuarios, criarUsuario };