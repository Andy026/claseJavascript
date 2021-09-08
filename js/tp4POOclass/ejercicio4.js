/*
Producto.
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto{
    constructor(codigo, nombre, precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;  
}
imprimirDatos(){
document.write(`<h1>${this.nombre}</h1>
Codigo del producto: ${this.codigo}
<br>Nombre del producto: ${this.nombre}
<br>Precio del producto: ${this.precio}
`)
}
}

let playStation = new Producto('as2131d', 'PlayStation 4', 50000);
let xbox = new Producto('ac21312', 'xbox', 60000);
let nintendoSwitch = new Producto('fj219e', 'Nintendo Switch', 10000);

let consolas = [playStation, xbox, nintendoSwitch];

playStation.imprimirDatos();
xbox.imprimirDatos();
nintendoSwitch.imprimirDatos();