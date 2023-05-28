var vetor = [1,4,5,7,6,4,9,12,14,15,958,47,82,74,84,74,46,4,574,3,2,3,2003,47,36,62,6,6];

var contador = 0;

//pra cada posição, eu vejo se o numero é par
//se for par, eu vou incrementar o contador e imprimir a quantidade final

for(var i = 0; i < vetor.length; i++){
    if((vetor[i] % 2) === 0){
        contador++
    }
}

console.log("Quantidade de pares: " + contador)


