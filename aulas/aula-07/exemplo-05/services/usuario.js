import { Usuario } from '../models/usuario.js';
import { buscarTodos, salvar } from '../repositories/usuario.js';

const saveUsuario = (nome, email) => {
    const usuario = new Usuario(nome, email);
    salvar(usuario);
}

const getUsuarios = () => {
    return buscarTodos();
}

export { saveUsuario, getUsuarios };