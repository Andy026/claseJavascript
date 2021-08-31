/* 
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades
y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0”
se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/

let ciudades = [];
let ciudad = "";
do {
  if (ciudad != "") {
    ciudades.push(ciudad);
  }

  ciudad = prompt("escribe una ciudad");
} while (ciudad != "0" && confirm("desea continuar?"));

document.write(ciudades);
