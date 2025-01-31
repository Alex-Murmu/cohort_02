const express = require("express");
const { default: errorMap } = require("zod/locales/en.js");
const app = express();
const port = 2000;
app.use(express.json())
app.post('/health-checkup',function(req,res){
 const kidneys = req.body.kidneys;
 const kindeyLenght = kidneys.length;
 if(!Array.isArray(kidneys)){
    return res.send("not ans array ")
 }
 if(kindeyLenght<=0){
    return res.send("Lenght is not good");

 }
 if(kindeyLenght>=3){
    return res.send("No you are not ")
 }
 // here we can addd bunch of checks 
 // but this is an ugly way to doing the checks

 res.status(200).json("you have "+kindeyLenght + " kidney")
})



app.listen(port,function(){
    console.log(`Server is running on http://localhost${port}`)
})