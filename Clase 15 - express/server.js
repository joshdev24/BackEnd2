import express from "express"
import userRouter from "./routes/user.route.js"



const app = express()

app.use(express.json()
)
app.use(express.urlencoded({extended:true}))

app.get ("/ping", (request,response)=>{
    response.send ("pong")
})

app.post('/enviar', (request, response) => {
    console.log(request.body)
    response.send('Recibido')
})




app.use("/api/users", userRouter)




app.listen(3000, () =>
{
    console.log(`El servidor se esta ejecutanto en http://localhost:3000`)
})


