/*2- Escribir un programa que solicite una nota (número) de 0  a 10.
Luego mostrar la calificación en un alert según los siguientes rangos de nota:
*/

let nota = prompt("Escribe una nota del 0 al 10");
switch (nota) {
  case "0":
  case "1":
  case "2":
    document.write("Muy deficiente");
    break;

  case "3":
  case "4":
    document.write("Insuficiente");
    break;

  case "5":
  case "6":
    document.write("Suficiente");
    break;

  case "7":
    document.write("Bien");
    break;

  case "8":
  case "9":
    document.write("Notable");
    break;

  case "10":
    document.write("Sobresaliente");
    break;

  default:
    alert("Nota invalida");
}
