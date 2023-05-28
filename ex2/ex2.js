var vetor = new Array(10);

var contador = 0;
var numero = 0;

//enquanto o contador for menor que 10 
// se o numero for impar, adicionamos ele no vetor
// sempre que for impar precisamos incrementar o contador pois ele significa a posição do vetor
// para toda a interação no looping precisamos incrementar o número

while(contador < 10){
    if((numero % 2) != 0){
        vetor[contador] = numero;
        contador++
    }
    numero++
}

console.log(vetor)