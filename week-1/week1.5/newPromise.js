const fs = require('fs');
const { reject } = require("lodash");

const promise = new Promise((resolve,reject)=>{
    const input1 = 12;
    const input2 =14;
    const ans = input1+input2;
    resolve(ans);
});
promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
}).finally((data)=>{
    console.log("finally ",data)
})

// 
function readfile(){
    return new Promise((resolve,reject)=>{
        fs.readFile('readme.txt','utf-8',function(error,data){
           if(data){
            resolve(data);
           }
           else{
            console.log(error, " data or anot found");
           }
        })
    })
};
const dp = readfile()
dp.then((data)=>{console.log(data)}).catch((reject)=>{console.log(reject)});
console.log(readfile(), "why")