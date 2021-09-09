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

let listaContacto = []

class Agenda{
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
    aniadirContacto(contacto){
        if(listaContacto.length < 10){
            listaContacto.push(contacto)
        }

    }
    existeContacto(contacto){
        if(listaContacto.includes(contacto)){
            document.write(`${contacto} ya existe.`);
        }else{
            return document.write(`${contacto} no existe.`)
        }
    }
    listarContactos(){
        let claves = Object.keys(listaContacto); //['nombres', 'numserie', ...] (en forma de arreglo)
        console.log(claves.length);
        document.write("<br>FunkoIronMan<br>");
    for (let posicion = 0; posicion < claves.length; posicion++) {
    //obtengo el nombre de una de las claves por cada vuelta del for
    let clave = claves[posicion];
    document.write(`<br>${clave}: ${listaContacto[clave]}`);
  }

    }
    buscarContacto(nombre){

    }
    eliminarContacto(contacto){

    }
    agendaLlena(){

    }
    huecosLibres(){

    }
    opciones(){

    }
}

let andy = new Agenda('Andy', 1140577540);
listaContacto.push(andy);
andy.listarContactos();