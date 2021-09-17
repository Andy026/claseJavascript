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

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  mostrarDatos() {
    document.write(`Nombre: ${this.nombre} Telefono ${this.telefono}`);
  }

  get obtenerNombre() {
    return this.nombre;
  }
  get obtenerTelefono() {
    return this.telefono;
  }

  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  set modificarTelefono(nuevoTelefono) {
    this.telefono = nuevoTelefono;
  }
}

class Agenda {
  constructor(tamanio) {
    this.contactos = [];
    this.tamanio = tamanio;
  }

  set modificarTamanio(cantidad) {
    this.tamanio = cantidad;
  }

  agregarContacto(contacto) {
    if (this.existeContacto(contacto)) {
      console.log("El contacto ya existe, no se puede agregar.");
    } else {
      if (!this.agendaLlena()) {
        this.contactos.push(contacto);
        console.log("Contacto añadido");
        this.listarContactos();
      }
    }
  }

  existeContacto(contacto) {
    const exist = this.contactos.find(
      (contactoExistente) => contactoExistente.nombre === contacto.nombre
    );
    if (exist) {
      return true;
    } else {
      return false;
    }
  }

  listarContactos() {
    for (let i = 0; i < this.contactos.length; i++) {
      console.log(
        `Contacto: ${this.contactos[i].obtenerNombre}
                    Telefono: ${this.contactos[i].obtenerTelefono}`
      );
    }
  }

  buscarContacto(contacto) {
    const encontrado = this.contacto.find(
      (existentes) => existentes.nombre === this.contactos
    );
    if (encontrado) {
      console.log("Contacto encontrado.");
    } else {
      console.log("Este contacto no existe.");
    }
  }

  eliminarContacto(contacto) {
    let contactosFiltrados = this.contactos.filter(
      (contactoExistente) => contactoExistente.nombre != contacto.nombre
    );
    console.log("Los contactos que deberían quedar" + contactosFiltrados);
  }

  agendaLlena() {
    if (thiss.contactos.length === this.tamanio) {
      console.log("Agenda llena");
      return true;
    } else {
      console.log("Queda espacio disponible");
      return false;
    }
  }

  huecosLibres() {
    let cantidadEspacios = this.tamanio - this.contactos.length;
    console.log("Cantidad de espacio disponible" + cantidadEspacios);
  }
}
let agendaPrueba = new Agenda(10);

do {
  let opcion = parseInt(
    prompt(`Seleccione una opcion:
            <br>1.- Agregar contacto.
            <br>2.- Cambiar tamaño de agenda.
            <br>3.- Listar contactos.
            <br>4.- Buscar contacto.`)
  );

  switch (opcion) {
    case 1:
      agendaPrueba.huecosLibres();

      let nombre = prompt("Ingrese un nombre");
      let telefono = prompt("Ingrese un telefono");
      let nuevoContacto = new Contacto(nombre, telefono);

      agendaPrueba.agregarContacto(nuevoContacto);
      break;

    case 2:
      let nuevoTamanio = parseInt(
        prompt("Ingrese la cantidad de contactos que desea tener.")
      );
      agendaPrueba.modificarTamanio = nuevoTamanio;
      console.log(
        "Tamaño de agenda modificado. Cantidad actual: " + nuevoTamanio
      );
      break;

    case 3:
      agendaPrueba.listarContactos();
      break;

    case 4:
      let contactoBuscado = prompt("INgrese el nombre que desea buscar");
      agendaPrueba.buscarContacto(contactoBuscado);
      break;
    default:
      document.write("Ingresó una opción invalida");
  }
} while (confirm("¿Quiere realizar otra operación?"));
