const express = require("express");
const port = 2000;
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.post("/handle",(req,res)=>{
    const count = req.body.count;
    console.log(count);
    res.json({message:"yes we did it"})
})

app.listen(port,()=>{
    console.log("server is running")
})

