const express=require('express')
const app=express()
require("./connection/connec");
app.get("/",(req,res)=>{
    res.send("Hello");
})

app .listen(1000,()=>{
    console.log("Server Started");
})