/*
3- Escribir un script que simule el lanzamiento de dos dados.
Hacer uso de la función Math.random para obtener números
aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
Sumar el resultado de lanzar dos dados y anotar en un array el número
de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

let a = b = c = d = e = f = 0;
let totalTiradas = 0;

function tiradaDado(){
    let dado6caras = parseInt(6*Math.random()+1)
    return dado6caras;
}

for (i=1; i <= 50; i++){
    tirada = tiradaDado();
    switch(tirada){
        case a:
        a++;
        break;

        case b:
        b++;
        break;

        case c:
        c++;
        break;

        case d:
        d++;
        break;

        case e:
        e++;
        break;

        case f:
        f++;
        break;
    }
}

totalTiradas = a+b+c+d+e+f;

document.write("El 1 ha salido " + a + " veces<br>");
        document.write("El 2 ha salido " + b + " veces<br>");
        document.write("El 3 ha salido " + c + " veces<br>");
        document.write("El 4 ha salido " + d + " veces<br>");
        document.write("El 5 ha salido " + e + " veces<br>");
        document.write("El 6 ha salido " + f + " veces<br>");
        document.write("<br>")
        document.write("Total de lanzamientos del dado: " + totalTiradas);