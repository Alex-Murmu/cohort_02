/*
Create a custom middleware function that logs the method and URL of every incoming request
*/

const express = require("express");
const port = 2000;
const app = express();

app.use(express.json());

// middleware 

 app.use((req,res,next)=>{
    console.log(`method : ${req.method}  and url : ${req.url}`);
    next();
 })

app.get('/',(req,res)=>{
 res.json({
    message:"Sdsdsds"
   })
})
app.listen(port,()=>{
    console.log(`sever is running on port `,port)
})