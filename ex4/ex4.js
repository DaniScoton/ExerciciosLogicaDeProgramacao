var vetor = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(var i = 0; i < vetor.length / 2; i++){
    var aux = vetor[i];
    vetor[i] = vetor[vetor.length - 1 - i];
    vetor[vetor.length - 1 - i] = aux;
}

console.log(vetor);