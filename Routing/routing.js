const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Wel-come to Express JS")
})

app.post("/",(req,res)=>{
    res.send("Post In Home Page")
})

app.get("/about",(req,res)=>{
    res.send("From About Page")
})

app.get("*",(req,res)=>{
    res.send("<h1>404 : Page Not Found</h1>")
    // res.send("<h3><a href="/">Home</a></h3>")
})

app.listen(5000)