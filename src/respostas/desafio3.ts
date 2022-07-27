// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById("atualizar-saldo")!; // o !, garante que o objeto não é nulo
let botaoLimpar = document.getElementById("limpar-saldo")!;
let soma = document.getElementById("soma")! as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo")!;

let saldoTotal = 0;

limparSaldo();

function somarAoSaldo(soma: number) {
  saldoTotal += soma;
  campoSaldo.innerHTML = saldoTotal.toString();
}

function limparCampoSoma() {
  soma.value = "";
}

function limparSaldo() {
  saldoTotal = 0;
  campoSaldo.innerHTML = saldoTotal.toString();
}

botaoAtualizar.addEventListener("click", function () {
    return somarAoSaldo(Number(soma.value));
  });


botaoLimpar.addEventListener("click", function () {
    limparSaldo();
  });

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
