/*
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
█ La fórmula del perímetro  es p = 2*(a +b)
*/

let lado1 = parseInt(prompt ("Escribe la longitud del primer lado de tu rectangulo"));
let lado2 = parseInt(prompt ("Escribe a longitud del segundo lado de tu rectangulo"));
console.log(lado1, lado2);

function resultado(lado1, lado2){
    perimetro = 2 * (lado1 + lado2);
    return perimetro;
}
alert(resultado(lado1, lado2));