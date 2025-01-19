const express = require('express');
const app = express();
const port = 1000;


app.use(express.json())
app.post('/',(req,res)=>{
    const name = req.body.name;
    const pass = req.body.pass;

    console.log(name, pass);
    res.json("received")
});

// GOLABL CATECHES   => Which will not propogate the error in client side  means catches all error and difendig to propgate user side 

app.use((err,req,res,next)=>{
    res.send("Something is Up with our server")
})

app.listen(port)