/* Modulo nativo del sistema de archivos de node.js */
const filesystem = require('fs')


const crearTxt = (direccion_y_nombre, contenido) => {
    /* Crear un archivo de manera sincronica */
    /* 
    writeFileSync:
        -direccion o path con el nombre de archivo y extension
        -info o data a escribir
        -encoding o codificacion de caracteres
    */
    filesystem.writeFileSync('./archivos/' + direccion_y_nombre, contenido, 'utf-8')
}
const leerTxt = () => {
    const data = filesystem.readFileSync('./archivos/archivo.txt', 'utf-8')
    console.log('El contenido de archivo.txt es: ' + data )
}


const crearJSON = (direccion_y_nombre, contenido) => {
    filesystem.writeFileSync('./archivos/json/' + direccion_y_nombre + '.json', JSON.stringify(contenido), 'utf-8')
    console.log(`Archivo: ./archivos/json/${direccion_y_nombre}.json ha sido creado con exito! 🚀😎`)
}
module.exports = {
    crearTxt: crearTxt,
    leerTxt,
    crearJSON
}