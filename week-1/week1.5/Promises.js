function AlexAsyncFunctions(){
  let p = new Promise((resolve)=>{
    resolve("11Hi There");
  })
  return p;
};

function main(){
   AlexAsyncFunctions().then((value)=>{
    console.log(value)
   })
};
main();

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const fs = require('fs');
const { functions } = require('lodash');
const { resolve } = require('path');
function readfile(){
  
 return new Promise(function(resolve){
       console.log("Inside the promise");
       fs.readFile('readme.txt','utf-8',function(error,data){
        console.log("before Resolve");
        let net = "mm";
        data=data+net;
        resolve(data);
       });
  })
  
};

// callback function to call

function onDone(data){
  console.log(data);
};

var a = readfile();





// without Promises

function readfile2(callbck){
  console.log("I am Second FN")
  fs.readFile('readme.txt','utf-8',function(error,data){
   if(error){
    console.log("Error Cought");
   }else{
    callbck(data,console.log("Second Fn onDone"));
   }
  });

}
readfile2(onDone);
a.then(onDone); 























// normal promises

const doforme = new Promise((resolve,reject)=>{
  let user = {id:1,name:"Alex",Objectid:1235,isActive:true};
  if(user["isActive"]){
    setTimeout(()=>{resolve(user)},3000)
    
  }
  else{
    reject("No Action are made");
  }
});



function giveme(data){
  console.log(data ,'why');
};
doforme.then(giveme).catch(error);

