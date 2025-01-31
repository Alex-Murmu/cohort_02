const express = require('express');
const port = 2000;
const app = express();
// body parse Middleware 
app.use(express.json())
// uservalidator Middleware 
const userMiddleware =(req,res,next)=>{
    const {username,password} = req.body;
    if(username!="Alex" || password!='1234'){
        res.status(404).json({
            message:"Invalid credentials"
        })
    }
    next();
};
// kidneyvalidator middleware 
const kidneyValidator = (req,res,next)=>{
    const kidneyId = req.body.kidneyId;
    if(kidneyId!=1 && kidneyId!=2){
        res.status(404).json({message:"invalid kiddneys id"})
    }
    next();
}
app.get('/health-checkup',userMiddleware,kidneyValidator,(req,res)=>{
   
    res.json({message:"SDSdsd"})
})
app.listen(port)
  