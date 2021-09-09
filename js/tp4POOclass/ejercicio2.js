/*
2-Escribe un programa que cree un objeto "cuenta"
con las siguientes propiedades:
-Una propiedad titular con el valor "Alex".

-Una propiedad saldo, teniendo como valor inicial 0.

-Un método ingresar() que permita añadir dinero
a la cuenta, pasando la cantidad como parámetro.

-Un método extraer() que permita retirar la cantidad
pasada como parámetro.

-Un método informar() que retorne la información 
del estado de la cuenta. 

-Utiliza este objeto para mostrar la descripción,
ingresar y extraer dinero y volver a mostrar
la descripción del estado de la cuenta.
*/

let cuenta = {
  titular: "Alex",
  saldo: 0,
  estado: true,
  ingresar: function (monto) {
    cuenta.saldo += monto;
    return `Su monto es $${monto}`;
  },
  extraer: function (extraccion) {
    cuenta.saldo -= extraccion;
    return `Has extraido $${extraccion}`
  },
  informar: function () {
    return cuenta.estado
  },
};
function mostrarObjeto() {
  return document.write(
    `Titular: ${cuenta.titular}<br>Saldo de cuenta: ${cuenta.saldo}`
  );
}

//console para el ingreso de dinero
console.log(cuenta.saldo);
console.log(cuenta.ingresar(20));
console.log(cuenta.saldo);

//console para la extracción del dinero
console.log(cuenta.extraer(10));
console.log(cuenta.saldo);

mostrarObjeto();