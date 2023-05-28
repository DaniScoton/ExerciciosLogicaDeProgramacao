var vetor = [1,5,8,12,9,7,13,56,32,75,88,44,88,40];
console.log(vetor)
console.log("------------------")

var posicaoNumero1 = prompt("Escolha a posição 1: ");
var posicaoNumero2 = prompt("Escolha a posição 2: ");

var numero1 = vetor[parseInt(posicaoNumero1)];
var numero2 = vetor[parseInt(posicaoNumero2)];
var soma = numero1 + numero2

console.log(soma)
