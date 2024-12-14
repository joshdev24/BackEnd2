import express from 'express';
import { engine } from 'express-handlebars';


const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./views")



app.get("/products/new", (req, res) => {
    res.render("product-form", {})	
})

app.post("/products/new", (req, res) => {
    console.log(req.body)
    console.log("Recibido")
    const ERRORES = {
        nombre: null,
        precio: null,
        stock: null,
        descripcion: null
    }
    if (!req.body.nombre.trim() || !isNaN(req.body.nombre) ) {
        ERRORES.nombre = "No se puede enviar un valor numero o vacio!"
        
    }
    if (!req.body.precio.trim() || !isNaN(req.body.precio) ) {
        ERRORES.precio = "No se puede enviar un valor numero o vacio!"
        
    }
    if (!req.body.stock.trim() || !isNaN(req.body.stock) ) {
        ERRORES.stock = "No se puede enviar un valor numero o vacio!"
        
    }
    console.log(ERRORES)

    let hayError = Object.values(ERRORES).some(error => error !== null)

    if (hayError) {
        return res.render("product-form", 
            {data: {
                error: ERRORES
            }
            
        })

res.redirect("/")
    

    }
})


app.get("/products/:product_id/update", (res, req) =>{
    res.render("product-form-update",{
        data:{
            ERRORES: {
                nombre: null,
                precio: null,
                stock: null,
                descripcion: null
            },
            form_state:{
                    nombre: producto.buscado.nombre,
                    precio: producto.buscado.precio,
                    stock: nproducto.buscado.stock,
                    descripcion: producto.buscado.descripcion
                }
            }
        }
    )
    })

app.get("/products/:product_id/update", (req, res) => {
    const {product_id} = req.params
    const {nombre, precio, stock, descripcion} = req.body
    const productoActualizado = {nombre, precio, stock , descripcion}
    const ERRORES = {
        nombre: null,
        precio: null,
        stock: null,
        descripcion: null
    }
    if (!req.body.nombre.trim() || !isNaN(req.body.nombre) ) {
        ERRORES.nombre = "No se puede enviar un valor numero o vacio!"
        
    }
    if (!req.body.precio.trim() || !isNaN(req.body.precio) ) {
        ERRORES.precio = "No se puede enviar un valor numero o vacio!"
        
    }
    if (!req.body.stock.trim() || !isNaN(req.body.stock) ) {
        ERRORES.stock = "No se puede enviar un valor numero o vacio!"
        
    }


    let hayError = Object.values(ERRORES).some(error => error !== null)

    if (hayError) {
        return res.render("product-form-uodate", 
            {data: {
                error: ERRORES,
                form_state:{
                    product:{...productoActualizado, id: product_id}
                }
            }
            
        })
    }

    const productoIndex = productos.findIndex(producto => producto.id === Number(product_id))
    productos[productoIndex] = {
        ...productos[productoIndex],
        nombre,
        precio,
        stock,
        descripcion
    }

    res.redirect(`/products/${product_id}`)


})   

app.get('/', (req, res) => {
    try {
        const productos = [
            {
                id: 1,
                nombre: 'Tv samsung',
                precio: 100,
                descripcion: 'La mejor tv',
                stock: 5
            },
            {
                id: 2,
                nombre: 'Tv LG',
                precio: 150,
                descripcion: 'La mejor tv',
                stock: 10
            },
            {
                id: 3,
                nombre: 'Tv Noblex',
                precio: 200,
                descripcion: 'La mejor tv',
                stock: 54
            }
        ]

        const response = {
            status: 200,
            messages: "Productos Obtenidos",
            ok: true,
            data: {
                title: "titulo X",
                fecha: "2022-10-10",
                productos
            }

        }
        res.render("home", response)
    }
    catch (error) {
        const response = {
            status: 500,
            messages: "INTERNAL SERVER ERROR",
            ok: false,
            data: {
                error: error.message
            }

        }

        res.render("home", response)
    }

})





app.listen(PORT, () => {

    console.log(`La aplicacion esta corriendo en http://localhost:${PORT}`);

})
