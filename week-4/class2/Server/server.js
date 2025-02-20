const express = require('express');
const port = 2000;
const app = express();
const cors = require("cors");
app.use(express.json())
app.use(cors())
const User = require("./index");



app.post('/',async (req,res)=>{
    const {fname,lname,email,password} = req.body;
    console.log(fname ,lname,email,password)
    const date = new Date();

    try {
        const newUser = await User.create(
            fname,
            lname,
            email,
            password
       )
          res.status(200).json({
              message:true,
              description:"Received",
              time:date,
              id:true,
              account:"create Successfully"
          })
    } catch (error) {
     res.send(error.message)   
    }
})


app.listen(port,()=>{
    console.log("server is On")
})