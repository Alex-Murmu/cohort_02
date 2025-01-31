const express = require("express");
const port = 2000;
const app = express();
let count = 0;
// middleware to valid user auth
function middilware(req,res,next){
  const {username,password,kidneyid} = req.headers;

if(username !=="alex" || password !=123 || kidneyid !=1){
   return res.status(500).json({meassage:"upp you messedUp"})
}

next();

};
// middleware to check the route count 

function countPressed(res,res,next){
  count= count+1;
  if(count>5){
    return res.status(500).json({message:"time up"});
  }
  next();
}

app.get('/',middilware,countPressed,(req,res)=>{                 // this is the correct way to implement the middleware 

  res.status(200).json({message:"Sdsdsdsdsds",count})
})


app.listen(port,()=>{
  console.log("****************Sever**************",count)
})
