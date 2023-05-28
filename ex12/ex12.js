const span = document.getElementById('span');
var nota1 = parseFloat(prompt("Digite a nota da sua primeira prova"));
var nota2 = parseFloat(prompt("Digite a nota da sua segunda prova"));
var media = (nota1 + nota2) / 2;

if(media >= 0 && media < 7){ // de 0 a 6.9999999
    span.innerText = "Reprovado";
}else if(media >= 7 && media < 10){ // de 7 a 9.9999999
    span.innerText = "Aprovado";
}else if(media === 10){ // = 10
    span.innerText = "Aprovado com Distinção"
}else{ // menor que 0 ou letras
    span.innerText = "Média Inválida";
}
