const { functions } = require("lodash");

function iamPromise(){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am  promise")
        },1000);
    })
    return p;
};

async function main(){
 let data = await iamPromise();
 console.log(data)
};

setTimeout(()=>{
    console.log("Apple")
},1000)
main();
setTimeout(()=>{
    console.log("Apple")
},1000)
console.log("Hello i am last")