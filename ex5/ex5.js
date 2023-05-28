var vetor = [0,1,2,3,4,5];

var x = 4; //número que desejo encontrar no vetor
var encontrado = false;

try {
    for(var i = 0; i < vetor.length; i++){
        if(vetor[i] === x){
            console.log("Este número existe e esta na posição " + i);
            encontrado = true;
            break;
        }
    } 

    if(!encontrado){
        throw new Error("Este número não existe");
    }
} catch (error) {
    console.log(error);
}









