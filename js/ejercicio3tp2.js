/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/

let resultado = ""; //Declaro una variable vacia
do {
    let cadena = prompt("Escribe una frase"); //Se muestra un prompt al usuario y se guarda el dato en la var cadena
    if (resultado == "") {
        resultado = resultado + cadena; //Si la variable está vacia se concatena sin guión
    }
    else {
        resultado = resultado + "-" + cadena; //Si hay mas de una cadena se concatena con guión
    }
} while (confirm("Desea seguir?")); // Mientras sea true, se volverá a ejecutar el bucle

document.write(resultado); // Si el usuario presiona Cancelar(false), se printea el resultado en pantalla.