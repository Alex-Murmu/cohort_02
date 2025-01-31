const express = require("express");
const z = require('zod');
const jwt = require('jsonwebtoken');
const app = express();
const port = 2000;

// middleware to parse content 
app.use(express.json());
// middleware  function not on all route for input validation 
const UserSchema = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().number(),
});

// middleware for convert user password or user as a jwt token and send them back
const reposne = (user)=>{
  return jwt.sign(user,sercretKey,{expiresIn:'1d'});
}

app.get("/",(req,res)=>{
    const user = req.body;
    const user2 = UserSchema.safeParse(user);

    if(!user2.ok){
        return res.status(404).json({
            message:"something parse error ",
            discription:error.message
        })
    }

    res.status(200).json(reposne(user2))
})

app.listen(port,()=>{
    console.log("server is running")
})