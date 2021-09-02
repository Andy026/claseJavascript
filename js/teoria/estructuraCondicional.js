let numero1=parseInt(prompt("Ingrese un primer número"));
let numero2=parseInt(prompt("Ingrese un segundo número"));

document.write("Número 1= "+numero1);
document.write("<br>Número 2= "+numero2);

// Estructura if
/* if(condición lógica){
    código a ejectura si la respuesta es true
}
*/

if(numero1 > numero2){
    document.write("<br>El número 1 es mayor al número 2");
}else if(numero1 == numero2){
    // código a ejecutar cuando no se cumple la condición
        document.write("<br>Los numeros ingresados son iguales")
    }else{
        document.write("<br>El número 2 es mayor al número 1")
    }