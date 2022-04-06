const express = require("express")
const ejs = require("ejs")
const app = express()

app.set("view engine", ejs)

app.get("/support",(req,res)=>{
    const data = 
        {
            "name" : "req.query.name"
        }
    
    res.render("support", {data})
})
app.listen(5000,()=>{
    console.log("Seraver Started on 5000 port")
})