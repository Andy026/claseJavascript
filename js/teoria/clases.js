//crear una clase
class Funkopop {
  //acá comienzo a crear mi clase o 'molde'
  constructor(nombreFunko, precio, version, numSerie) {
    //crear estructura de mi objeto
    this.nombre = nombreFunko;
    this.precio = precio;
    this.version = version;
    this.numSerie = numSerie;
    this.disponible = true; //clásico valor por defecto
  }

  //metodos
  mostrarDatos() {
    document.write(`<h1>Funkopop</h1>
        Nombre: ${this.nombre}
        <br>Precio: $${this.precio}
        <br>Version: ${this.version}
        <br>Numero de serie: ${this.numSerie}
        <br>Disponibilidad: ${this.disponible}`);
  }

  //propiedades conmutadas get y set
  get mostrarNombre() {
    return this.nombre;
  }

  get mostrarPrecio() {
    return this.precio;
  }

  get mostrarVersion() {
    return this.version;
  }

  get mostrarNumSerie() {
    return this.numSerie;
  }

  get mostrarDisponible() {
    return this.disponible;
  }

  set modificarPrecio(precioNuevo) {
    this.precio = precioNuevo;
  }
}

class Persona{
    constructor(nombre, apellido, dni, email, telefono, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.telefono = telefono;
        this.edad = edad;
    }

    mostrarDatos(){
        document.write(`
        <br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Email: ${this.email}
        <br>Telefono: ${this.telefono}
        <br>Edad: ${this.edad}
        `)
    }
}

//alumno: notas, usuario, contraseña, matricula, comisión
//tutor: usuario, contraseña, legajo, comision


//crear una instancia de un objeto
let strange = new Funkopop(
  "Stephen Vincent Strange",
  5000,
  "End-game",
  "djhk3346"
);
let hulk = new Funkopop("Bruce Banner", 5000, "End-game", "aksjdka2");
let viudaNegra = new Funkopop(
  "Natasha Romanoff",
  5000,
  "End-game",
  "1asdaksdj2"
);



//usar el metodo mostrarDatos
strange.mostrarDatos();
hulk.mostrarDatos();
viudaNegra.mostrarDatos();

//utilizar las propiedades conmutadas
document.write(`<hr><br>Propiedad Nombre: ${strange.mostrarNombre}`);
document.write(`<br>Propiedad Precio: $${strange.mostrarPrecio}`);
//modificar el precio de un funko
strange.modificarPrecio = 6000;
document.write(`<br>Propiedad Precio: $${strange.mostrarPrecio}`);

let juan = new Persona('Juan', 'Alaniz', 33659875, 'jalaniz@gmail.com', '1532695875', 35);
let abel = new Persona('Abel', 'Cordoba', 34625184, 'acordoba@gmail.com', '1516854932', 34);
juan.mostrarDatos();
abel.mostrarDatos();