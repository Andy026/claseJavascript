/*
Agenda telefónica.
Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono.
Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos.
Se podrá crear de dos formas, indicándole nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede
almacenar mas contactos indicar por pantalla.

existeContacto(Contacto): indica si el contacto pasado existe o no.

listarContactos(): Lista toda la agenda

buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.

eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla

agendaLlena(): indica si la agenda está llena.

huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/

//let agenda = new Agenda(10)
let listaContacto = []

class Contacto{
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
    aniadirContacto(contacto){
        if(listaContacto.length < 10){
            listaContacto.push(contacto)
        }

    }
    existeContacto(contacto){ //usar .find
        if(listaContacto.includes(contacto)){
            document.write(`${contacto} ya existe.`);
        }else{
            return document.write(`${contacto} no existe.`)
        }
    }
    listarContactos(){ //crear bucle simple
        let claves = Object.keys(listaContacto); //['nombres', 'numserie', ...] (en forma de arreglo)
        console.log(claves.length);
        document.write("<br>FunkoIronMan<br>");
    for (let posicion = 0; posicion < claves.length; posicion++) {
    //obtengo el nombre de una de las claves por cada vuelta del for
    let clave = claves[posicion];
    document.write(`<br>${clave}: ${listaContacto[clave]}`);
  }

    }
    buscarContacto(nombre){ //pedir nombre, guardar en variable y usar bucle para recorrer y comparar
        //similar a existeContacto (find)
    }
    eliminarContacto(contacto){ //primero buscarlo y después eliminarlo con .splice O FILTER (EMILSE USÓ FILTER)

    }
    agendaLlena(){ //el tamaño se guardó anteriormente en una variable, hay que compararlo con un length
        //devuelve true o false
    }
    huecosLibres(){
        //si se cumple la condición de que la cantidad de elementos de la agenda es < se hace (elementos - contactos.length)
    }
    opciones(){

    }
}

let andy = new Agenda('Andy', 1140577540);
listaContacto.push(andy);
andy.listarContactos();

//menú con do while (en el do va el switch, en el while un confirm)