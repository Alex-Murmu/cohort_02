/* create a middleware that log the server take time execute or how long it take to reponse 
*/

const express = require("express");
const port = 200;
const app = express();
app.use(express.json());
const responseTime = ((req,res,next)=>{
    const startTime = Date.now();
    res.on(`finish`,()=>{
          const duration = Date.now() - startTime;
          console.log(`on url : http:/${req.url} took ${duration}m/s`)
    })
    next();
})
app.use(responseTime)
app.get('/',(req,res)=>{
    setTimeout(()=>{
        res.json({mesag:"SDsd"})
    },3000)
    
})

app.post('/signup',(req,res)=>{
    const user = req.body;
     res.json({
        user
     })
})
app.listen(port)