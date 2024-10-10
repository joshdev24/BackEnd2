import express from "express";
import productRouter from "./routes/products.routes.js";


const app = express();
const PORT = 3000;

app.use(express.json());



app.post("/ping", (req, res) => {
    console.log(req.body)
    res.json({
        ok: true,
        status: 200,
        payload: {
            message: "Ping recibido"
        }
    })

})

app.use("/api/products", productRouter)


app.listen(PORT, () => {
    console.log(`Servidor express escuchando en http://localhost:${PORT}`);
})