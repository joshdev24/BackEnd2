

const validarEmail = (email) => {
    const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(emailValid.test(email)) 
}  

const validarNumero = (num) => num && !isNaN(num)
const validarNombre = (nombre) => nombre.length >=7
    


module.exports = {
    validarEmail,
    validarNumero,
    validarNombre
}