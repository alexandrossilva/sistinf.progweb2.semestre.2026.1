let usuarios = [];

const buscarTodos = () => {
    return usuarios;
};

const salvar = (usuario) => {
    usuarios.push(usuario);
};

export { buscarTodos, salvar };