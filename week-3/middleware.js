const express = require('express');
const app = express();
const port = 2000;

// number of request 
let counter = 0;
function rateLimiting(req,res,next){
  counter++;
  console.log(counter)
  next();
};


// let create a user validator 
function userValidator(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username!='alex' && password!=1234){
        res.json({
            message:"user not exsist"
        })
    }
    else{
        next();
    }
}
app.use(userValidator); // middleware to check user Validation

app.use(rateLimiting) // using ratelimiting

app.get('/',(req,res)=>{
    res.send("Ohhh")
})










app.listen(port)