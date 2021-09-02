/*
3- Escribir un script que simule el lanzamiento de dos dados.
Hacer uso de la función Math.random para obtener números
aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
Sumar el resultado de lanzar dos dados y anotar en un array el número
de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

let table = [];
let duplicados = [];
const temporal = table.sort();
for (i=0; i< temporal; i++){
    if (temporal[i + 1] === temporal[i]) {
        duplicados.push(temporal[i]);
}


for (i = 0; i < 50; i++) {
  x = Math.floor(Math.random() * (5 + 1) + 1);
  y = Math.floor(Math.random() * (5 + 1) + 1);
  suma = x + y;
  table.push(suma);

}
console.log(table)
}