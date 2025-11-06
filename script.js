// variável global para armazenar os valores e operadores
var valores = "";

// adiciona números ao campo de texto
function addVal(i) {
    valores += i;
    document.getElementById("resultados").value = valores;
}

// adiciona operadores ou limpa o campo
function addOperation(x) {
    if (x === "C") {
        valores = "";
    } else {
        valores += x;
    }
    document.getElementById("resultados").value = valores;
}

// calcula o resultado da expressão
function calculate() {
    try {
        valores = eval(valores);
        document.getElementById("resultados").value = valores;
    } catch (error) {
        document.getElementById("resultados").value = "Erro";
        valores = "";
    }
}
