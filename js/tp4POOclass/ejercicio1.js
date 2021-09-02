/*
1- Crea un objeto llamado auto que tenga algunas características
como el color, marca, modelo y si está encendido o apagado.
Crea los métodos necesarios para permitir
encender y apagar el auto.
*/

let auto = {
    color: 'Amarillo',
    marca: 'Lambo',
    modelo: 'Murcielago',
    encendido: function(){
        return true;
    },
    apagado: function(){
        return false;
    }
}