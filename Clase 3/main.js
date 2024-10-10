"use strict";
// let nombre = "Jorge";
// function sumar (a : number , b : number ) : number {
//     return a + b
// }
// sumar (3,6)
// const saludar = (nombre?:string) =>{
//     if(nombre){
//         return "hola" + nombre
//     } else{
//         return "Hola, no se tu nombre"
//     }
// }
const calcularIva = (a) => {
    const numeroConIva = a * 1.21;
    return numeroConIva;
};
console.log(calcularIva(1000));
const obtenerImpuestoIva = (a) => {
    const iva = (calcularIva(a));
    const total = a + iva;
    const base = a;
    return { iva, total, base };
};
const crearPersonaje = (nombre, edad, ciudadOrigen) => {
    return {
        nombre,
        edad,
        ciudadOrigen,
        vida: 100,
        armadura: 0,
        ataque: 0,
        defensa: 0
    };
};
console.log(crearPersonaje("Jorge", 25, "CABA"));
