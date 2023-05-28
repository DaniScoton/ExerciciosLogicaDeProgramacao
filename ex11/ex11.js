var letra = prompt("Digite uma letra");
const span = document.getElementById("span");
var vetorVogais = ["A", "E", "I", "O", "U"];
var vetorConsoantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

if( vetorVogais.includes(letra.toUpperCase())){
    span.innerText = "Esta letra é uma vogal";
}else if(vetorConsoantes.includes(letra.toUpperCase())){
    span.innerText = "Esta letra é uma consoante";
}else{
    span.innerText = "Caractere Inválido";
}