// learning zod
/*

validate username = string min(8) passowrd = min(8).and somespecail caharacter;
email = email 
*/

const express = require("express");
const z = require('zod');
const app = express();
const port = 2002;
app.use(express.json());


const validate=(obj)=>{
    const schema = z.object({
        username:z.string(),
        email:z.string().email(),
        password:z.string().min(8)
    })
    
    return schema.safeParse(obj)
}

app.post('/',(req,res)=>{   
    const response = validate(req.body);
    if(!response.success){
        res.send({message:"yooo",response})
    }
    res.send(response)
})

app.listen(port,function(){
    console.log(`server is on http://localhost${port}`)
})