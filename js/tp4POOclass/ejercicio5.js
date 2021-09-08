/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  esMayordeEdad() {
    if (this.edad >= 18) return document.write("Eres mayor de edad.");
  }

  generarDni() {
    let max = 99999999;
    let min = 10000000;
    let dniGenerado = Math.random() * (max - min) + min;
    return document.write('<br>'+ Math.round(dniGenerado));
  }

  mostrarDatos() {
    document.write(`
        Nombre: ${this.nombre}
        <br>Edad: ${this.edad}
        <br>DNI: ${this.dni}
        <br>Sexo: ${this.sexo}
        <br>Peso: ${this.peso}
        <br>Altura: ${this.altura}
        <br>Año de Nacimiento: ${this.anioNacimiento}
        <br>`);
  }

  mostrarGeneracion() {
    if (this.anioNacimiento > 1930 && this.anioNacimiento < 1948) {
      return document.write(`Perteneces a la Generación Silenciosa.
                    <br>Tu rasgo caracteristico es la austeridad.`);
    } else if (this.anioNacimiento > 1949 && this.anioNacimiento < 1968) {
      return document.write(`Perteneces a la Generación Baby Boom.
                    <br>Tu rasgo caracteristico es la ambición.`);
    } else if (this.anioNacimiento > 1969 && this.anioNacimiento < 1980) {
      return document.write(`Perteneces a la Generación X.
                    <br>Tu rasgo caracteristico es la obsesión por el éxito.`);
    } else if (this.anioNacimiento > 1981 && this.anioNacimiento < 1993) {
      return document.write(`Perteneces a la Generación Y (Millennials).
                    <br>Tu rasgo caracteristico es la frustración.`);
    } else if (this.anioNacimiento > 1994 && this.anioNacimiento < 2010) {
      return document.write(`Perteneces a la Generación Z
                    <br>Tu rasgo caracteristico es la irreverencia.`);
    }
  }
}

let andy = new Persona("Andrés", 24, "39664979", "H", "70kg", "1,81", 1996);
andy.mostrarDatos();
andy.mostrarGeneracion();
andy.generarDni();


