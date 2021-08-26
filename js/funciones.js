// funciones sin parametros

function holaMundo() {
  // todo el código de la función
  document.write("Hola mundo");
}

//funciones con parametros
function saludar(nombre, apellido) {
  document.write(
    "<br>Hola mi nombre es: " + nombre + ". Mi apellido es " + apellido + "."
  );
}

//funciones que retornan un valor
function convertirDolaresPesos(dolares){
    let pesos = dolares * 190;
    console.log(pesos)
    // el return siempre será la última linea de código
    return pesos;
}

// ejecutar/invocar/llamar a una función
holaMundo();
// llamar a una función con parametros
saludar("Esteban", "Marquez");
saludar("Alaniz", "Juan");

//let nombre = prompt("Escribe tu nombre");
//let apellido = prompt("Escribe tu apellido");
//saludar(nombre, apellido);
// saludar(prompt("Escribe tu nombre"), prompt("Escribe tu apellido"));

let precioIphone = convertirDolaresPesos(599)
document.write("<br>Iphone SE $"+precioIphone);
document.write("<br>Jordan $"+convertirDolaresPesos(200));