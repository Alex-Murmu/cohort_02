const { functions, get } = require("lodash");

function AlexAsyncfuncion(){
    let p = new Promise((resolve,reject)=>{
        resolve("HI am  resolver1");
    });
    return p;
};

async function mainfn(){
 const value = await AlexAsyncfuncion();
 console.log(value)
};
mainfn();



////////////////////////////////////////////////////
////////////////////////////////////////////////////



// without async await

function AlexasyncFuncton(){
    let p = new Promise((resolove)=>{
        setTimeout( resolove("Hi am from without async Await"),3000)
 
    })
    return p;
};

function main(){
    AlexasyncFuncton().then((data)=>{
        console.log(data)
    })
};

main();


getData(callback)
// with Async await 

const alecAsyncFuncton2=()=>{
    let p = new Promise((resolve,reject)=>{
        setTimeout(
            resolve("Hi i am from async await ")
            ,2000);
    })
    return p;

}

async function main2() {
    const value = await alecAsyncFuncton2();
    console.log(value)
}
main2();


//without promies and async awit / async

function getData(callback){
    setTimeout(callback,2000);
};

function callback(datt){
    console.log("Hello i am NAN")
};

console.log("main");


function app(){
    let p = new Promise((resolove)=>{
       resolove("I am Resolving the new promisess")
    })
    return p;
}

async function iAmAsync() {
    let fetchData = await  app();
    console.log(fetchData)
};

iAmAsync();