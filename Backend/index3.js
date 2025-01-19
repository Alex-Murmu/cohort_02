const express = require('express');
const app = express();
app.use(express.json())

app.get('/singin',function(req,res){
  const {username,password} = req.body;
  const data = {
    message:"notjing",
    name:username,
    password:password
    };
    console.log(username,password)
 res.send(data, " ",username)
});



app.use((req,res,next)=>{
    res.send({
        
        message:"something went worng"
    })
})


app.listen(3000,()=>{
 console.log("Sever is Running")
})