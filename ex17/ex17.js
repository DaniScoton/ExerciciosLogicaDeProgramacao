var span = document.getElementById('span');
var numero = parseInt(prompt("Digite um número"));
var resultado = "";

for(var i = 0; i <= 10; i++){
    resultado += "\n \n  O resultado de " + numero + " x " + i + " é igual a: " + (numero * i);
}

span.innerText = resultado;