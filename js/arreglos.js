// crear un arreglo con datos

let series = ["Naruto ♥", "the good doctor", "juego de tronos", 2, 8, true];

//crear un arreglo vacio
let temporadas = [];

// mostrar un valor de un arreglo
document.write(series[0]);
console.log(series.length);

// agregar un elemento al final del arreglo
series.push("Dr. House");

//contar los elementos que tiene el arreglo
console.log(series.length);
document.write("<br> " + series[6]);

// recorrer cada elemento de un arreglo
for (let posicion = 0; posicion < series.length; posicion++) {
  document.write("<br> Serie: " + series[posicion]);
}

// agregar un elemento en una posición particular
series.splice(1, 0, "Loki");

for (let posicion = 0; posicion < series.length; posicion++) {
    document.write("<br> Serie: " + series[posicion]);
  }

// eliminar uno o varios elementos de un array
series.splice(4, 2);

for (let posicion = 0; posicion < series.length; posicion++) {
    document.write("<br> Serie: " + series[posicion]);
  }

// modificar un elemento desde una posición particular del arreglo
series[4] = "Vikingos"

for (let posicion = 0; posicion < series.length; posicion++) {
    document.write("<br> Serie: " + series[posicion]);
  }