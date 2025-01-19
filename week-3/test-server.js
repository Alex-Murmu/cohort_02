const express = require("express");
const port = 1000;
const app = express();

app.get('/getData',(req,res)=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))

            res.json()
})



app.listen(port,()=>{
    console.log("Sever is running");
})