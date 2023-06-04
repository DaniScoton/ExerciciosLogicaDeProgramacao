var vetor = [];
var contador = 0;
var span = document.getElementById('span');

for( var i = 0; i < 10; i++){
    var idade = parseInt(prompt("Digite sua idade"));
    vetor.push(idade);
}

for(var i = 0; i < vetor.length; i++){
    if(vetor[i] >= 18){
        contador++;
    }
}

span.innerText = contador;

