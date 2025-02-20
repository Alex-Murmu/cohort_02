const express = require('express');
const cors = require('cors');

const port = 2000;
const app = express();
app.use(cors());
app.get('/sum',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const ans = a+b;

    res.send(ans.toString());
})

app.listen(port,()=>{
    console.log(port,"server is running")
})

