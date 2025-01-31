const express = require("express");
const port = 2000;
const app = express();


app.get('/',(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.headers.kidneyid;

    if(username !== 'alex' || password != 123){
        return res.status(500).json({message:"Access denied Or check the credentials porperlly"})
    }

    if(kidneyId!=1 && kidneyId!=2){
        return res.send({message:"invalid input"})
    }

    
    res.status(200).json({
        message:"i got you",
        discription:"Your kidney is fine as norms"
    })
})

app.listen(port,()=>{
    console.log(`server On http://localhost${port}`)
})