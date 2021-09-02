// while :)

/* 
while(condición lógica){
    el código a ejecutar
    cambiar condición lógica
}
*/

/* let contador = 2;
console.log(contador);
while(contador <= 20){
    document.write("Elemento " + contador + "<br>");
    // contador = contador + 1;
    contador = contador + 2 
}
*/

// do-while hacer... mientras se cumple la condición lógica

let cont = 1;

do{
    // código que quiero ejecutar varias veces
    document.write("Contador " + cont + "<br>")
    // cambio la condición lógica
    cont ++
}while(cont <= 20)

/* for(crear la variable; condición lógica; incrementar o decrementar la variable){
    código a ejecutar varias veces
}
*/

for(let i = 1; i <= 20; i++ /*i=i+2*/){
    document.write("Estructura for vuelta " + i + "<br>")
}

/*
switch


*/