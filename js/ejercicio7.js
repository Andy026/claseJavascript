let numero1 = parseInt(prompt("Escribe el primer número"));
let numero2 = parseInt(prompt("Escribe un segundo número"));
let numero3 = parseInt(prompt("Escribe el tercer número"));

if(numero1 > numero2){
    temporalMayor = numero1; 
}else{
    temporalMayor = numero2
}

if(temporalMayor > numero3){
    numeroMayor = temporalMayor
}else{
    numeroMayor = numero3
}
document.write("El número mayor es "+numeroMayor);