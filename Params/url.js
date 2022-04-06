const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome to My Page")
})

app.get("/about/:id/:name",(req,res)=>{
    // const id = req.query.params
    // res.send(`My id Is : ${req.params.id} and my name is ${req.params.name}`)
    res.send(`My id Is : ${req.params.id} and my name is ${req.params.name}`)
})

app.listen(5000)

