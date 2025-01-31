/*Body Parsing Middleware

body-parser: Parses incoming request bodies in a middleware before your handlers, available under req.body.

*/
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const { add } = require("lodash");
const port = 2000;
const app = express();
app.use(bodyParser.json());
app.use(cors())


app.get('/',(req,res)=>{
    const {name,age,address} = req.query;
    console.log(name,age,address)
    res.status(200).json({name,age,address})

})


app.listen(port,function(){
    console.log("Server is running")
})