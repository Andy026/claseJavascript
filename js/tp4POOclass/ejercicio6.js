/*Libros.
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libros {
  constructor(isbn, titulo, autor, numeroPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroPaginas = numeroPaginas;
  }

  mostrarLibro() {
    document.write(
      `El libro <b>${this.titulo}</b> 
      con ISBN: <b>${this.isbn}</b>, 
      creado por el autor <b>${this.autor}</b> 
      tiene <b>${this.numeroPaginas}</b> páginas.<br>`
    );
  }

  get(mostrarIsbn) {
    return this.isbn;
  }

  get(mostrarTitulo) {
    return this.titulo;
  }

  get(mostrarAutor) {
    return this.autor;
  }

  get(mostrarPaginas) {
    return this.numeroPaginas;
  }

  set(modificarIsbn) {
    this.isbn = nuevoIsbn;
  }

  set(modificarTitulo) {
    this.titulo = nuevoTitulo;
  }

  set(modificarAutor) {
    this.autor = nuevoAutor;
  }

  set(modificarPaginas) {
    this.numeroPaginas = nuevoPaginas;
  }
}

let lovecraft = new Libros(
  "1596324587962",
  "Los gatos de Ulthar",
  "H.P. Lovecraft",
  458
);
let stephenKing = new Libros("1569851235478", "Cell", "Stephen King", 435);

lovecraft.mostrarLibro();
stephenKing.mostrarLibro();
