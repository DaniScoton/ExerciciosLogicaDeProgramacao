var span = document.getElementById('span');
var horario = prompt("Digite em qual turno você estuda \n Manhã(M), Tarde(T), Noite(N)").toUpperCase();

switch(horario){
    case "M":
        span.innerText = "Bom Dia!";
        break;
    case "T":
        span.innerText = "Boa Tarde!";
        break;
    case "N":
        span.innerText = "Boa Noite";
        break;
    default:
        span.innerText = "Informação Inválida";
        break;
}