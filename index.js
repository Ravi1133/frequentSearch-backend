const express =require("express")
const allroutes = require("./routes")
const dotenv=require("dotenv")
const connection = require("./database")
const cors =require("cors")
dotenv.config() 
connection()
const app =express()
app.use(cors())
 app.use(express.json())
 
allroutes(app)
console.log()
let PORT=process.env.PORT ||8001
 app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
 })



