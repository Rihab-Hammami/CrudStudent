console.log('hello')

const express=require("express")
const dotenv=require("dotenv").config()
const port=process.env.PORT ||5000
const connectDB=require("./config/db")

connectDB()

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/Student',require("./routes/studentRoutes"))

app.listen(port,console.log(`server started on port ${port}`))