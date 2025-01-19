/* normal function are are synchronous function
*/

function add(a,b){
    return a+b;
}


console.log(add(12,13))
console.log(add(12,13))
console.log(add(12,13))
console.log(add(12,13))
const t = false;
let count =0;
if(t){
    for(let i=0;i<=10000000;i++){
          count+=i;
    }
     console.log(count);
}
else{
     console.log("invalid");
};
const { error } = require('console');
// code for call


//==============================================file Reading with synchromous means blocking
const fs = require('fs');
console.log("Before the Execution of Nm");
fs.readFile('a.txt','utf-8',(error,data)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(data)
});

console.log("after Exectuin")