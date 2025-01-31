const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require("express");
const z = require("zod");
const app = express();
const port = 1000;
const dburl = "mongodb+srv://ftalexrayen:2frdH6xQ0HoEIpXz@cluster0.ew5fs.mongodb.net/";
const jwtsecret = "SDADdd"
app.use(express.json());

// login precheck middleware
const loginPreCheck = async (req,res,next)=>{
    const  {name,password} = req.body;
    const isValiduser = await dbUserschema.findOne({name,password})
    if(!isValiduser){
        return res.json({message:" user not signup or missed some character"})
    }
    next()
}

//isUser valid middleware
const isValidUser = (req,res,next)=>{
      const token = req.headers.authorization;
      console.log(token)
      const istokenTrue = jwt.verify(token,jwtsecret);
      console.log(istokenTrue)
      if(istokenTrue){
        next();
      }
      else{
        res.status(500).json({
            message:"invalid token or not signup"
        })
      }
}
// databse user schema 
const dbUserschema  = mongoose.model("users",{
    name:String,
    email:String,
    password:String
})

// middlewware to chech user Exsistance 
async function userExsist(req, res, next){
    const {name,email,password} = req.body;
    const isExsist = await dbUserschema.findOne({email});
    console.log(isExsist)
    if(isExsist){
        return res.status(404).json({message:"user Already Exsist"})
    }
    next();
}

// middleware for input validation
const validateuserinput = (req, res, next) => {
    const { name, email, password } = req.body;
    const userSChema = z.object({
        name: z.string().min(8),
        email: z.string().email(),
        password: z.string().min(10)
    })
    const response = userSChema.safeParse({ name, email, password });
    if (!response.success) {
        return res.status(404).json({ message: "invalid input" });
    }
    next();
}

// const
// connecting db
mongoose.connect(dburl).then(() => {
    console.log("DB connected")
}).catch((erro) => {
    console.log("error")
})




app.post("/signup", validateuserinput, userExsist,async (req, res) => {
    const { name, email, password } = req.body;
   
    const user = new dbUserschema({name,email,password});

    try{
        await user.save();
        res.status(202).json({message:"Account create successfully"});
    }catch(err){
        return res.json({message:"error to save user"})
    }
    
    

})

app.get("/login",loginPreCheck,(req,res)=>{
    const {name,password} = req.body;

 const token = jwt.sign({name,password},jwtsecret);
 res.status(202).json( {
    message:"user login successfully",
    token
 })
})


app.get("/post",isValidUser,(req,res)=>{
    res.status(202).json({
        message:"yes you are allowed ",
        linke:"post read"
    })
})
// global catch 
app.use((error,req,res,next)=>{
    res.status(404).json({message:"server error",
                errroMessage:error.message
    })
    next()
})

app.listen(port, () => {
    console.log("sever is on")
})