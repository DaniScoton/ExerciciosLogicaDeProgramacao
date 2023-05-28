var vetor = [0, -2, 9, -4, 7, -9];

//lopping 'manual'
for(var i = 0; i < vetor.length; i++){
    if(vetor[i] < 0 ){
        vetor[i] = 0;
    }
}

//looping 'automatico'
vetor.forEach(numero => {
    if(numero < 0 ){
        numero = 0;
    }
})

console.log(vetor);