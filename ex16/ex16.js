var span = document.getElementById('span');
var salario = parseFloat(prompt("Digite o seu salário atual"));
var novoSalario = null;
var aumento = null;
var percentual = null;

if(salario > 0 && salario <= 280){
    calcularAumento(0.2, salario);
}else if(salario > 280 && salario <= 700){
    calcularAumento(0.15, salario);
}else if(salario > 700 && salario <= 1500){
    calcularAumento(0.1, salario);
}else if(salario > 1500){
    calcularAumento(0.05, salario);
}else{
    span.innerText = "Informação Inválida";
}

function calcularAumento(percentual, salario){
    aumento = (salario * percentual);
    novoSalario = aumento + salario;
    span.innerText = "O salário antes do aumento era de " + salario + ". O percentual de aumento foi de " + percentual + ". O valor de aumento foi de " + aumento + ". E o novo salário é de " + novoSalario;
}
