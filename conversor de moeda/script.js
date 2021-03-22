const dolar = 5.52;
const libra = 7.67;
const euro = 6.6;
var dinheiroUsuario = document.getElementById("dinheiro");
var moeda = document.getElementById("moedas");
var calcular = document.querySelector("button");
var resultado = document.getElementById("resultado");

function calcularDolar() { // fução para fazer os cálculos das moedas

  resultado.innerHTML = ""; // para limpar o resultado

  var tipoMoeda = moeda.value; // pega o valor da moeda, neste caso foi declarado no html o value = dolar, euro, libra

  var calculoMoeda = dinheiroUsuario.value; // pega o valor de quanto foi digitado

  if (calculoMoeda < 0 || calculoMoeda === "") { // condição se for menor que 0 ou vazio 
    var textResultado = document.createTextNode("Digite um valor valido!");
  } else if (tipoMoeda == "libra") {
    var operacao = (parseFloat(calculoMoeda) * libra).toFixed(2); // para fixar 2 casas decimais

    var textResultado = document.createTextNode( // cria um texto 
      "Este é o valor da conversão: R$" + operacao
    );
  } else if (tipoMoeda == "dolar") {
    var operacao = (parseFloat(calculoMoeda) * dolar).toFixed(2); // para fixar 2 casas decimais

    var textResultado = document.createTextNode(
      "Este é o valor da conversão: R$" + operacao
    );
  } else if (tipoMoeda == "euro") {
    var operacao = (parseFloat(calculoMoeda) * euro).toFixed(2); // para fixar 2 casas decimais

    var textResultado = document.createTextNode(
      "Este é o valor da conversão: R$" + operacao
    );
  }

  resultado.appendChild(textResultado);  // coloca o textResultado dentro de resultado 
}

calcular.setAttribute("onclick", "calcularDolar()"); // apos eu clicar no botão chama a função 