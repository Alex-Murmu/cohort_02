//  count the number of request as a midleware 
let requestcount =0;
const express = require("express");
const port = 2000;
const app = express();
app.use(express.json())

// db for store route 
const TotoalRequestofroute = {};

//middleware
const count = (req,res,next)=>{
  const url = req.url;
  const method = req.method;
  requestcount =requestcount+1;

  if(TotoalRequestofroute[url]){
    TotoalRequestofroute[url] = TotoalRequestofroute[url]+1 ;
  }
  else{
    TotoalRequestofroute[url] = 1
  }
  console.log(TotoalRequestofroute)
  next();
}


app.use(count)


app.get('/',(req,res)=>{
    res.status(200).json({message:"request ",requestcount})
})

app.get('/app',(req,res)=>{
  res.status(200).json({
    mesg:"Sdsds",TotoalRequestofroute
  })
})

app.post('/user',(req,res)=>{
  const user = req.body;
  res.status(200).json({
   uername: user.username,
    age: user.age,
   address: user.address,
   requestcount,
   TotoalRequestofroute
  })

})
app.listen(port,()=>{
    console.log(`Server is ON http://localhost${port}`)
})