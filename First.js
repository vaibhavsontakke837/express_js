
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
   // res.send("Hello Express JS");
   res.send({
      id:165,
      name:"Vikas"
   })
}).listen(5000)

// app.listen(5000);