let ultimoId = 0;

class Usuario {

    constructor(nome, email) {
        this.id     = ++ultimoId;
        this.nome   = nome;
        this.email  = email;
    }

}

export { Usuario };