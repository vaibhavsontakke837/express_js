const express = require("express")
const app = express()

//render public file
app.use(express.static("public"))


// console.log(__dirname + "/public/index.html")

app.get("/contact",(req,res)=>{
    // res.send(__dirname + " /public/index.html")
    res.sendFile(__dirname + "/index.html")
})
app.listen(5000)