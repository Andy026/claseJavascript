/*
4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y
mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function tabla() {
  let numero = prompt("Escribe un número");
  let a = [];

  for (i = 1; i <= 10; i++) {
    a.push(numero * i);
  }
  document.write("Los resultados son: " + a)
}

tabla();