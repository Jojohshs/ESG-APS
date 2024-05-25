/* Função para calcular a emissão média de Co2*/

function calcularsoma() {
var num1 = parseFloat(document.getElementById ("numero1").value);
var num2 = parseFloat(document.getElementById ("numero2").value);
var num3 = parseFloat(document.getElementById ("numero3").value);
var num3segundo = parseFloat(document.getElementById ("numero3segundo").value);
var num4 = parseFloat(document.getElementById ("numero4").value);
var resultadogas = num3 * num3segundo;
var multi = num1 + num2 + num4;
var resultadototal = resultadogas + multi;
document.getElementById("resultado").innerText = "Total:" +resultadototal;
}

 
/* Função para calcular a correspondência da emissão média de Co2 por kwh de energia elétrica*/
  function mudarvalorenergia() {
    var mudarnum1 = parseFloat(document.getElementById ("numero1").value);
    var mult = mudarnum1 * 0.03;
    document.getElementById ("valor-mensal-energia").innerText = mult;
  }
/* Função para calcular a correspondência da emissão média de Co2 por m³ de água*/
  function mudarvaloragua() {
    var mudarnum2 = parseFloat(document.getElementById ("numero2").value);
    var mult = mudarnum2 * 0.065;
    document.getElementById ("valor-mensal-agua").innerText = mult;
  }
  /* Função para calcular a correspondência da emissão média de Co2 por m³ de gás*/
function mudarvalorgas () {
var mudarnum3 = parseFloat(document.getElementById ("numero3").value);
var mudarnum3segundo = parseFloat(document.getElementById ("numero3segundo").value);
var resultado = mudarnum3 * mudarnum3segundo;
var mult = resultado * 25.09;
document.getElementById ("valor-mensal-gas").innerText = mult;
}
 /* Função para calcular a correspondência da emissão média de Co2 por m³ de resíduos*/
  function mudarvalorresiduos() {
    var mudarnum4 = parseFloat(document.getElementById ("numero4").value);
    var mult = mudarnum4 * 0.18;
    document.getElementById ("valor-mensal-residuos").innerText = mult;
  }