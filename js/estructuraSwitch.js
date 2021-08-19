/*
switch(operación){
    case 1:
        // todo el código a ejecutar si la opción que eligió el usuario es 1
        break;
    case 2:
        // ....
    case "otros":
        // .... "...."
        break;
    default:
        // código a ejecutar por defecto si la opción que eligió es invalida.
}
*/

let estacion = prompt("Ingrese su estación del año preferida: 1- verano, 2- invierno, 3- otoño, 4- primavera");

switch(estacion){
    case "1":
    case "verano":
        document.write("El usuario seleccionó la estación 'Verano'");
        break;
    case "2":
        document.write("El usuario seleccionó la estación 'Invierno'");
        break;
    case "3":
        document.write("El usuario seleccionó la estación 'Otoño'");
        break;
    case "4":
        document.write("El usuario seleccionó la estación 'Primavera'");
        break;
    default:
        alert("Ingresó una opción invalida.")

}