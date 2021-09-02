// crear un arreglo con datos

let series = ["Naruto ♥", "the good doctor", "juego de tronos", 2, 8, true];

//crear un arreglo vacio
let temporadas = [];

// mostrar un valor de un arreglo
document.write(series[0]);
console.log(series.length);

//funcion para mostrar los elementos del arreglo
let mostrarArray = () => {
  //recorrer cada elemento de un array
  for (let posicion = 0; posicion < series.length; posicion++) {
    //document.write("<br> Serie: " + series[posicion]);
    document.write(`<br> Serie: ${series[posicion]} - posicion: ${posicion}`);
  }
  document.write("<br>");
};

//funcion tradicional para mostrar elementos del arreglo
function mostrarSeries() {
  document.write("<br><h3>Arreglo de series</h3>");
  for (let posicion = 0; posicion < series.length; posicion++) {
    document.write("<br> Serie: " + series[posicion]);
  }
  document.write("<br>");
}

// agregar un elemento al final del arreglo
series.push("Dr. House");

//contar los elementos que tiene el arreglo
console.log(series.length);
document.write("<br> " + series[6]);

// recorrer cada elemento de un arreglo
mostrarSeries();

// agregar un elemento en una posición particular
series.splice(1, 0, "Loki");
mostrarSeries();

// eliminar uno o varios elementos de un array
series.splice(4, 2);
mostrarSeries();

// modificar un elemento desde una posición particular del arreglo
series[4] = "Vikingos";
mostrarArray();

//eliminar todos los elementos a continuación desde una posición particular
series.splice(2);
mostrarArray();
