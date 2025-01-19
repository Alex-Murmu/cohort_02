const express = require('express');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
const port = 2000;
const SecretKey = "Pankaj"

app.get('/',(req,res)=>{
    res.json({
        message:"Hello i am alex"
    })
})


app.post('/user',(req,res)=>{
    const name = req.body;
    const password = req.body;
    const token = jwt.sign({name,password},SecretKey,{expiresIn:'1h'});
  res.status(200).json({
    message:"Yes access granted",
    token
})


})


app.listen(port,()=>{
    console.log("Server is running")
})