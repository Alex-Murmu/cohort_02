const express = require('express');
const app = express();
const port = 2000;

/*
 what ever the routs here is got 

 effected or some thing went wrong these all will be handel by 

 ===============Global Catches ==================== 
          which is used in the bottom of code
*/

app.get();
app.post();
app.put();
app.delete();
app.use();  // and so on




// global catches //   it takes four arguments as input
app.use((err,req,res,next)=>{
    res.json("somethig went wrong")
    next();
})

app.listen(port)