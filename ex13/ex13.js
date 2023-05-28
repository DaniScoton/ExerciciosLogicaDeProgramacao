const span = document.getElementById('span');
var num1 = parseInt(prompt("Digite um número"));
var num2 = parseInt(prompt("Digite mais um número"));
var num3 = parseInt(prompt("Digite outro número"));

if(num1 > num2 && num1 > num3){
    span.innerText = "O maior número é o: " + num1;
}else if(num2 > num1 && num2 > num3){
    span.innerText = "O maior número é o: " + num2;
}else if(num3 > num1 && num3 > num2){
    span.innerText = "O maior número é o: " + num3;
}else{
    span.innerText = "Todos os elementos devem ser números e devem ser diferentes. Tente novamente"
}