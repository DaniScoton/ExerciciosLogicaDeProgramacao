var span1 = document.getElementById('span1');
var span2 = document.getElementById('span2');
var span3 = document.getElementById('span3');

var numero1 = parseInt(prompt("Digite um número"));
var numero2 = parseInt(prompt("Digite outro número"));
var numero3 = parseInt(prompt("Digite mais um número"));

var vetor = [];

vetor.push(numero1);
vetor.push(numero2);
vetor.push(numero3);

function bubbleSortCrescente(vetor){
    for(var j = 0; j < vetor.length; j++){
        for(var i = 0; i < vetor.length; i++){
            if(vetor[i] > vetor[i + 1]){
                var aux = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = aux;
            }
        }
    }

}

function bubbleSortDecrescente(vetor){
    for(var j = 0; j < vetor.length; j++){
        for(var i = 0; i < vetor.length; i++){
            if(vetor[i] < vetor[i + 1]){
                var aux = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = aux;
            }
        }
    }

}

span1.innerText = vetor;

bubbleSortCrescente(vetor);
span2.innerText = vetor;

bubbleSortDecrescente(vetor);
span3.innerText = vetor;
