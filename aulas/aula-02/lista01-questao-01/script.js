function maiorNumero() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n1").value;

    if (n1 == "" || n2 == "" || isNaN(n1) || isNaN(n2)) {
        alert("Um ou ambos os números não são informados ou inválidos!");
    }
    else {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        if (n1 < 0 || n2 < 0) {
            alert("Um ou ambos os números são negativos!");
        }
        else if (n1 == n2) {
            alert("Ambos os números são iguais!");
        }
        else {
            let maior;
            
            if (n1 > n2) maior = n1;
            else         maior = n2;
            
            alert("Maior número é " + maior);
        }

    }

}

const botao = document.querySelector("button");
botao.addEventListener("click", maiorNumero);
