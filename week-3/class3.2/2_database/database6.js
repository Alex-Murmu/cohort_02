const express = require("express");
const { add } = require("lodash");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors")
const port = 2000;
const app = express();
const jwtSecret ="128rer";

const User = mongoose.model("users",{
    name:String,
    age:Number,
    address:String,
    password:String
})

mongoose.connect("mongodb+srv://ftalexrayen:2frdH6xQ0HoEIpXz@cluster0.ew5fs.mongodb.net/")
.then(()=>{
    console.log("Mongo Db Connected ")
}).catch((error)=>{console.log("Not connected")});

app.use(express.json());
app.use(cors())
// signUp route
app.post("/signup",async(req,res)=>{

   const {name,age,address} = req.body;

    const token = jwt.sign({name,age,address},jwtSecret,{expiresIn:'1h'});

    const user =new User({
        name,
        age,
        address,
        password:token

    })

    try{
       await user.save();
       //========on =ly send data after 
       res.status(200).json({
        message:"User save successfully",
        user
       })
    }
    catch(error){
   // if error 
   console.log(error.message);
   res.status(404).json({message:"Ladfda ho gya ",
    user
   });
    }
  
});

// login Routes
app.get('/signIn',(req,res)=>{
    const {name,token} = req.body;
 const isVerified = jwt.verify(token,jwtSecret);

 if(isVerified){
    res.status(200).json({
        message:"Yes you are Authoriszed user"
    })
 }else{
    res.status(404).json({
        message:"Lafda ho gya",
        error: error.message
    })
 }
     
})

app.use((error,req,res,next)=>{
    res.status(404).json({
        message:error.message
    })
})
app.listen(port,()=>{
    console.log("***************Server 01 ON***************")
}) 