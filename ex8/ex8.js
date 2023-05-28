var num1 = parseInt(prompt("Digite um número"));
var num2 = parseInt(prompt("Digite outro número"));

if( num1 < num2 ){
    console.log(num2);
}else if( num1 > num2 ){
    console.log(num1);
}else{
    console.log("Os números digitados são iguais");
}
