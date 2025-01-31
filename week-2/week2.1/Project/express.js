const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello SUmen");l
    
})

app.get('/download',(req,res)=>{
    req.send("Enter Data ");
});
app.post('/backend',function(req,res){
    console.log(req.headers);
    console.log(req.body);
    res.send("Data are Fetched");
})

app.listen(port,()=>{
    console.log("Server Is runnig on port :"+port)
})

