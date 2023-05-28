var vetor = [12, 8, 7, 5, 6, 21, 42, 32, 31];

function ordenar(vetor) {
    for (let j = 0; j < vetor.length; j++) {
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] < vetor[i + 1]) {
                var aux = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = aux;
            }
        }
    }
}

ordenar(vetor);

console.log(vetor);
