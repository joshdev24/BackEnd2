import { mongoose } from "./config/mongoDB.config.js";


const usuarioSchema = new mongoose.Schema(
    {
    nombre: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    rol: {type: String, required: true},
    password: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required: true},
    fecha_registro: {type: Date, default: Date.now}
    }
)

const Usuario = mongoose.model("Usuario", usuarioSchema)
const crearUsuario = async () => {
    try{
        const usuario = new Usuario({
            nombre: "Juanito",
    email: "juanito@utn",
    rol: "user",
    password: "juanito122",
    telefono: "123456789",
    direccion: "calle 123",
})
const resultado = await usuario.save()
return resultado
    }
    catch(error){
        console.log(error)
    }
}




