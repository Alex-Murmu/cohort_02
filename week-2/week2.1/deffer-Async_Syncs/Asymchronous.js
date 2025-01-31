// same here but with Async code
const fs = require("fs");
console.log("befor data fetched from txt file")
fs.readFile('./a.txt','utf-8',(error,data)=>{
      if(error){
        console.error(error);
        return;
      }
      else{
        console.log(data)
      }
      
    }
    )

console.log("after data fetched from txt file ")