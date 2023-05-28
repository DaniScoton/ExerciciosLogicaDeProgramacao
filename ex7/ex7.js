var vetor = ["Meu nome é Danielly" , "MeunomeéVitor" , "Amo minha namorada" , "MeunomeéJoão"];

var semEspacos = vetor.filter(frase => !frase.includes(" "));
var comEspacos = vetor.filter(frase => frase.includes(" "));

console.log(semEspacos);
console.log(comEspacos);


