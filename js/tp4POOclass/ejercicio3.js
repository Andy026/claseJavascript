/*
3-Escribe una clase que permita crear distintos objetos
“rectángulos”, con las propiedades de alto y ancho,
mas los métodos necesarios para modificar y mostrar
sus propiedades, calcular el perímetro y el área.
*/

class rectangulos{
    constructor (altoRec, anchoRec){
        this.alto = altoRec;
        this.ancho = anchoRec;
        this.mostrar = function(){
            return console.log(this.alto, this.ancho);
        };
        this.modificar = function(x, y){
            this.ancho = x;
            this.alto = y;
            return `Ancho ${this.ancho}. Alto ${this.alto}`;
        }
        this.perimetro = function(x, y){
            x = this.ancho;
            y = this.alto; 
            return x*2 + y*2;
        }
        this.area = function(x, y){
            return this.ancho * this.alto;
        }
    }
}
let rectangulo1 = new rectangulos(20, 40)
