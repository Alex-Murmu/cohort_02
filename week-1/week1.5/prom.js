
const express = require("express");
const app = express();
const port = 2000;


app.use(express.json())


app.get("/backend-user",(req,res)=>{
    const id = req.query.id;
    console.log(id);

    res.status(200).json({
        message:"got you "
    })
})

app.use((req,res,next)=>{
    res.json({
        message:" server problem"
    })
})

app.listen(port,()=>{
    console.log("Server Is runnings")
})
