const express = require('express');
const mongoose = require('mongoose');
const { Schema } = require('zod');
const port = 2000;
const app = express();
app.use(express.json())

 const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
 });

 const User = mongoose.model('MainDatabase',userSchema);

(async()=>{
    try{
        await mongoose.connect("mongodb+srv://ftalexrayen:2frdH6xQ0HoEIpXz@cluster0.ew5fs.mongodb.net/");
         console.log('Db is connected')
     }catch(error){
      console.log(error)
     }
})
();

app.get('/',(req,res)=>{
    res.json({
        name:"sdadd",
        age:22
    })
})

app.post('/user/signup',async(req,res)=>{
    const {name,email,password} = req.body;
    
    try{
    const newUser = new User({
        name,
        email,
        password
    })

    await newUser.save()
    console.log("usr saved successfully");
    res.status(200).json("user saved successfully");
   }catch(error){
    console.log()
    res.status(404).json({
        eror:error
    })
   }
})

app.listen(port,()=>{
 console.log("server is on")
})