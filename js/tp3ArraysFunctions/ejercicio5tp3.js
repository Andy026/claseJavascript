/*
2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
sólo por minúsculas o por una mezcla de ambas.
*/

let cadena = prompt("Escribe un texto");

function texto(cadena){
    let resultado = "La cadena '" + cadena + "' ";
    if (cadena == cadena.toUpperCase()){
        resultado += " está formada por solo mayusculas";
    }else if(cadena == cadena.toLowerCase()){
        resultado += " está formada por solo minusculas"
    }else{
        resultado += " está formada por minusculas y mayusculas";
    }
    return resultado;
}

alert(texto(cadena));