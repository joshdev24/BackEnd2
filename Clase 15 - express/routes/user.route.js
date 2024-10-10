import express from "express"
import ResponseBuilder from "../utils/Response.js"


const userRouter = express.Router()


userRouter.get("/", (request, response) =>{
    let res = new ResponseBuilder()
    .setOk(true)
    .setStatus(200)
    .setCode("GET_INFO_SUCCESS")
    .setPayload({mensaje: 'test'})
    .build()
    response.json(res)
})



userRouter.get("/cantidad", (request, response) =>{
    let res = new ResponseBuilder()
    .setOk(true)
    .setStatus(200)
    .setPayload({cantidad: 2})
    .build()
    response.json(res)
})




























export default userRouter