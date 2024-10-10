const {crearTxt, leerTxt, crearJSON} = require('./utils/sistemaArchivos.js')
crearTxt('archivo.txt', 'w')
leerTxt()


const persona = {
    nombre: 'pepe',
    edad: 91
}

crearJSON("persona-1", persona)

