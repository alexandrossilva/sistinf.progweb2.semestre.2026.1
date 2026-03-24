const botao = document.querySelector("button");
botao.addEventListener("click", () => {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n1").value;

    if (n1 == "" || n2 == "") {
        alert("Um ou ambos os números não informados ou inválidos!");
    }
    else {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        if (n1 == n2) {
            alert("Ambos os números são iguais!");
        }
        else {
            let maior = n1 > n2 ? n1 : n2;
            alert(`Maior número é ${maior}`);
        }

    }
});