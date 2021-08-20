// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

var frase = prompt("Escribe una frase")
var cantidad = frase.length

for(i = 0; i < cantidad; i++){
    if (frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i"|| frase.substr(i,1) === "o" || frase.substr(i,1) === "u")

    document.write(frase.substr(i,1));}