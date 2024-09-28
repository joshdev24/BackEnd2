import { error } from "console";
import express, { request } from "express";
import filesystem from "fs"


const app = express()

app.get("/", (request, response) => {
    response.send("hola")
})

app.get("/fecha", (request, response) => {
    response.send(new Date().toString())
})

app.post("/usuario", (request, response) => {
    console.log(request.body)
    const usuarios = JSON.parse(filesystem.readFileSync("./usuarios.json", "utf-8"))
    usuarios.push({ nombre: request.body.nombre, email: request.body.email })
    filesystem.writeFileSync("./usuarios.json", JSON.stringify(usuarios))
    response.send("Usuario Registrado")
})


app.post('/usuario2', async (req, res) => {
    try {
        let users = []
        const resultado = await filesystem.promises.readFile('./data/users.json', 'utf-8')

        if (!resultado) {
            users = [request.body]
        } else {
            users = [JSON.parse(resultado)]
            users.push(request.body)
        }
        const data = await filesystem.promises.writeFile('./data/users.json', JSON.stringify(users), 'utf-8')
        if (data) throw new error('failed to register user')
        res.status(200).send("User registered")
    } catch (error) {
        res.send(error.message)
    }
})




app.listen(3000, () => {
    console.log("Aplicacion escuchandose en el puerto http://localhost:3000")
})