import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import useRouter from "./router/use.router.js"
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
app.use("/users",useRouter)
app.listen(process.env.PORT,()=>{
 console.log("hai")
})
