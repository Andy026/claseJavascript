/*
Producto.
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    //Metodo para imprimir datos en pantalla
    imprimeDatos(){
        document.write(`<br>
        Codigo: $${this.codigo} <br>
        Nombre: $${this.nombre} <br>
        Precio: $${this.precio} <br>`);
    }

}

//Creo un array vacio
let arrayProductos = [];

//Instancio los objetos
let leche = new Producto(9485, 'Milkaut', '$60');
let fideo = new Producto(5637, 'Lucchetti', '$40');
let azucar = new Producto(4903, 'Ledesma', '$40');

//Pusheo los objetos al array
arrayProductos.push(leche, fideo, azucar);

//Recorro el array para ejecutar el metodo de cada objeto
for(i in arrayProductos){
    arrayProductos[i].imprimeDatos();
}