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

class Persona {
  constructor(nombre, apellido, dni, email, telefono, edad, usuario, pass) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.email = email;
    this.telefono = telefono;
    this.edad = edad;
    this.usuario = usuario;
    this.pass = pass;
  }

  mostrarDatos() {
    document.write(`
    <br><br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Email: ${this.email}
        <br>Telefono: ${this.telefono}
        <br>Edad: ${this.edad}
        <br>Usuario: ${this.usuario}
        <br>Contraseña: ${this.pass}
        `);
  }
}

//herencia
class Alumno extends Persona {
  constructor(
    nombre,
    apellido,
    dni,
    mail,
    telefono,
    edad,
    usuario,
    pass,
    matricula,
    comision,
    notas,
    curso
  ) {
    //invocar el metodo constructor de la clase persona
    super(nombre, apellido, dni, mail, telefono, edad, usuario, pass);
    this.matricula = matricula;
    this.comision = comision;
    this.notas = notas;
    this.curso = curso;
  }
  //sobreescribir/modificar metodos (polimorfismo)
  mostrarDatos() {
    document.write(`
    <br><br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Email: ${this.email}
        <br>Telefono: ${this.telefono}
        <br>Edad: ${this.edad}
        <br>Usuario: ${this.usuario}
        <br>Matricula: ${this.matricula}
        <br>Comisión: ${this.comision}
        <br>Notas: ${this.notas}
        <br>Curso: ${this.curso}
        `);
  }
}

class Tutor extends Persona {
  constructor(
    nombre,
    apellido,
    dni,
    email,
    telefono,
    edad,
    usuario,
    pass,
    legajo,
    comision,
    antiguedad
  ) {
    super(nombre, apellido, dni, email, telefono, edad, usuario, pass);
    this.legajo = legajo;
    this.comision = comision;
    this.antiguedad = antiguedad;
  }
  mostrarDatosTutor(){
      document.write(`
        <br>Legajo: ${this.legajo}
        <br>Comision: ${this.comision}
        <br>Antiguedad: ${this.antiguedad}
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

let juan = new Persona(
  "Juan",
  "Alaniz",
  33659875,
  "jalaniz@gmail.com",
  "1532695875",
  35,
  "jalaniz",
  "123asdasd"
);
let abel = new Alumno(
  "Abel",
  "Cordoba",
  34625184,
  "acordoba@gmail.com",
  "1516854932",
  34,
  "acordoba",
  "87sd5w",
  1569,
  "16i",
  "A",
  "Fullstack"
);
juan.mostrarDatos();
abel.mostrarDatos();

let jony = new Tutor('Jonathan', 'Plodzien', 37659841, 'jplodzien@gmail.com', '1569875432', 27, 'jplodzien', '67hsjhd', 234, '16i', 5);

jony.mostrarDatos();
jony.mostrarDatosTutor();