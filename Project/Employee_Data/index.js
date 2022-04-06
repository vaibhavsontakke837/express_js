const express =  require("express")
const cors = require("cors")
const app=express()

app.use(express.json())

app.use(cors())

const conn = require("./db")


conn.connection.on("connected",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected to mongodb")
    }
})+

app.get("/",(req,res)=>{
    res.send("Hello From Home Page ")
})
app.use("/employee",require("./routes/employee"))


app.listen(5000,(err)=>{
    console.log("Server is Running on port no 5000")
})