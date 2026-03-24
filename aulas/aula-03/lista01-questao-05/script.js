const calcFaixaEtaria = () => {
    let ano = document.getElementById("ano").value;

    if (ano == "") {
        alert("Ano não informado!");
    }
    else {
        ano = parseInt(ano);

        const dataAtual = new Date();
        const anoAnual = dataAtual.getFullYear();

        if (ano > anoAnual) {
            alert(`Ano informado superior à ${anoAnual}!`);
        }
        else {
            const idade = anoAnual - ano;

            if (idade <= 17) {
                alert("Você é criança ou adolescente!");
            }
            else if (idade <= 64) {
                alert("Você é adulto(a)!");
            }
            else {
                alert("Você é idoso(a)!");
            }
        }
    }
}

const botao = document.querySelector("button");
botao.addEventListener("click", calcFaixaEtaria);