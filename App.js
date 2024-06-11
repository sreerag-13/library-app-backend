const express=require("express")

const mongoose=require("mongoose")
const cors=require("cors")
const library=require("./models"/library)

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/search",(req,res)=>{
    res.send("welcome")
})

app.post("/add",(req,res)=>{
    res.send("welcome add")
})

app.listen(8081,()=>{
    console.log("server start")
})

