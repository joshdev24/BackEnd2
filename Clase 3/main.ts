
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


const calcularIva =  (a : number) : number => {
    const numeroConIva : number = a * 1.21 
    return numeroConIva
}

console.log (calcularIva (1000))


interface Iva {
    iva: number, 
    total: number, 
    base: number
}


const obtenerImpuestoIva = (a : number ) : Iva => {
    const iva : number  = (calcularIva (a))
    const total : number = a + iva
    const base : number = a
    return {iva, total, base}
}




interface Personaje {
    nombre: string,
    edad: number,
    ciudadOrigen: string,
    vida: number,
    armadura: number,
    ataque: number,
    defensa: number

}


const crearPersonaje = (nombre :string, edad :number,  ciudadOrigen : string) : Personaje => {
    return {
        nombre ,
        edad ,
        ciudadOrigen ,
        vida : 100, 
        armadura :  0, 
        ataque : 0, 
        defensa : 0
    }
} 

console.log (crearPersonaje ("Gwayne", 25, "Oblivion")) 