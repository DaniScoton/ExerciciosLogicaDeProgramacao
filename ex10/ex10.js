const span = document.getElementById("span");
var letra = prompt("Informe o seu sexo");

if( letra.toUpperCase() === "F"){
    span.innerText = "Sexo Feminino";
}else if( letra.toUpperCase() === "M"){
    span.innerText = "Sexo Masculino";
}else{
    span.innerText = "Sexo Indefinido";
}