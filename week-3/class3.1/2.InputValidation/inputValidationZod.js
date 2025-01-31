// week-3/calss3.1/2.InputValidation/inputValidation1.js  in this we 

const express = require("express");
const z = require('zod');
const port = 2000;
const app = express();
app.use(express.json())

const schema = z.object({
    email:z.string(),
    password:z.string()
})

app.post('/health-checkup',(req,res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    console.log(response)
   if(!response){
       res.send("holo")
   }
    res.send({
        response
    })

})


app.listen(port,function(){
    console.log(`Server is oN http://localhost/${port}`)
})