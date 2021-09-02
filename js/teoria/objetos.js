let nombre = "tonty strike";
let numeroSerie = "123gsd2";
let precio = 5000;
let version = "End-game";

//crear un objeto con NOTACION LITERAL
let funkoIronMan = {
  // clave: valor => son PROPIEDADES
  nombre: "tonty strike",
  numeroSerie: "123gsd2",
  precio: 5000,
  version: ["End-game", "IronMan1"],
  //crear un metodo
  sinStock: function(){
    return false;
  },
  enStock: () =>{
    return true;
  }
};

//mostrar un objeto
console.log(funkoIronMan);

//mostrar una propiedad del objeto (nombreobjeto.prop).
document.write(`Articulo Funkopop: ${funkoIronMan.nombre}`);

//mostrar una prop del obj forma 2
document.write(`<br>Precio: $${funkoIronMan["precio"]}<br>`);

//mostrar todas las propiedades es un objeto
let claves = Object.keys(funkoIronMan); //['nombres', 'numserie', ...] (en forma de arreglo)
console.log(claves.length);

mostrarObjeto();

//modificar una propiedad de mi objeto
funkoIronMan.precio = 5500;
mostrarObjeto();

//agregar una propiedad nueva a un objeto
funkoIronMan.disponible = true;
mostrarObjeto();

//borrar una propiedad de un objeto
delete funkoIronMan.version;
mostrarObjeto();

//llamar a un metodo del objeto funkoIronMan
console.log(funkoIronMan.enStock());

function mostrarObjeto() {
  let claves = Object.keys(funkoIronMan); //['nombres', 'numserie', ...] (en forma de arreglo)
  console.log(claves.length);
  document.write("<br>FunkoIronMan<br>");
  for (i = 0; i < claves.length; i++) {
    //obtengo el nombre de una de las claves por cada vuelta del for
    let clave = claves[i];
    document.write(`<br>${clave}: ${funkoIronMan[clave]}`); //funkoIronMan[clave] => muestra el valor de una clave
  }
}
