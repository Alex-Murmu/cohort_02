// const express = require('express');
// const port = 1000;
// const app = express();
// const jwt = require('jsonwebtoken')

const { json } = require("express")

// app.use(express.json())
// const secret = "myPass"

// app.post('/',(req,res)=>{
//     const {name,password} = req.body;
//     console.log(name,password);

//     const token = jwt.sign({naem:name,password:password},secret,{expiresIn:'10m'})
//     res.status(200).json({
//         password:token
//     })
// })

// app.get('/ap',(req,res)=>{
//     console.log("i am");
//     res.json("Messafe")
// })

// app.use((error,req,res,next)=>{
//     res.status(404).json({
//         message:"error",
//         reasion:error.message
//     })
// })
// app.listen(port,()=>{
//     console.log("Server is runnig");
// })

const ALL_USER =[
    {
       username:"Alex@gmail.com",
       passoword:"123",
       name:"Alex Murmiu"
    },
    {
        username:"Anuraj@gmail.com",
        passoword:"12345",
        name:"Anuraj Marandi"
    },
    {
        username:"Ajay@gmail.com",
        password:"12352",
        name:"Ajay Hembram"
    }
    
]

const ans = JSON.parse(ALL_USER);
console.log(ans)