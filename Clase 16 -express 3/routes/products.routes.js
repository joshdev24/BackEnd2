

import express from "express"
import FileSystem from 'fs/promises'


const productRouter = express.Router()

productRouter.get('/detail/:product_id', (req, res) => {
    const { product_id } = req.params
    res.json({
        ok: true,
        status: 200,
        payload: {
            message: 'Detalles del producto'
        }
    })
})

productRouter.get("/", async (req, res) => {
    try {
        const product_list = await FileSystem.readFile('./data/products.json', 'utf-8')
        const products = JSON.parse(product_list)
        res.json({
            ok: true,
            status: 200,
            payload: {
                product: products
            }
        })
    } catch (error) {
        res.json({
            ok: true,
            status: 500,
            payload: {
                message: 'Error interno'
            }
        })
    }
})

productRouter.get("/:product_id", async (req, res) => {
    try {
        const { product_id } = req.params
        const product_list = await FileSystem.promises.readFile("./data(products.json", "utf-8")
        const finalList = JSON.parse(product_list)
        const productFiltrado = finalList.find(producto => producto.id == product_id)

        if (!productFiltrado) {
            res.json({
                ok: false,
                status: 404,
                payload: {
                    message: "Producto no disponible"
                }
            })
        } else {
            res.json({
                ok: true,
                status: 200,
                payload: {
                    productFiltrado
                }
            })
        }
    } catch (error) {
        console.error(error)
        res.error(error)
    }
})



export default productRouter