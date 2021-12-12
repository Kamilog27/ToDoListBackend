const express=require("express")
const morgan=require("morgan")
const cors=require("cors")
const app=express()

app.use(cors())
app.set('port',process.env.port || 3000)
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/homeworks",require("./routes/homework"))

module.exports=app;