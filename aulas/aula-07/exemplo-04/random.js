const getNumeroRandomico = (min, max) => {
    min = Math.ceil(min);                                  // maior inteiro inferior ao mínimo
    max = Math.floor(max);                                 // menor inteiro superior ao máximo
    return Math.floor(Math.random() * (max - min)) + min;  // retorno de número pseudoaleatório
}

const getNumerosRandomicos = (qtd, min, max) => {
    let numeros = [];

    while (numeros.length < qtd) {
        let n = getNumeroRandomico(min, max);
        if (!numeros.includes(n)) {
            numeros.push(n);
        }
    }

    return numeros;
}

export { getNumeroRandomico, getNumerosRandomicos };