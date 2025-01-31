function AlexasyncFuncton(callback){
  // do some async logic here
  callback("I am call back");
}
async function main() {
   AlexasyncFuncton(function(value){
    console.log(value)
   });
};
main();

////////////////////////////////////////////////
////////////////////////////////////////////////
// What does Asynchronous means ?
// Asynchronous means ====> Opposite of synchronous means things are heppen in parts 
// Multiple things are context switching with each other
// in Asynchronous =>things are happenig paralal some how


/// ===example 
/* first trunn on the gas and then start boiling the water while water is boilig you start cutting the vegitable 
 while you curtting the vegitable you asked you friend to Bring the catcheps from shop 

 so here the things are happeng parallal some how || means you are not waiting for one things to complete 

 this is the good example of Asynchronous operation
 */

 function findSum(n){
  let ans = 0;
  for(let i=0;i< n;i++){
    ans+=i;
  }
  return ans;
 };

 function findSumTill100(){
  console.log(findSum(100));
 }

 // sync sleep
 function syncSleep(){
  let a =1;
  for(let i=0;i<=1000000000;i++){
    a++;
  }
  console.log(a)
 }
 syncSleep();
//  findSumTill100();
setTimeout(findSumTill100,1000);
console.log("anser last");


/* =======================================================
 =========================================================
 */

  
const { error } = require("console");
const fs = require("fs");
const { functions } = require("lodash");

function readme(){
  // fs = stand fro fileSystem
  fs.readFile('readme.txt','utf-8',(data,error)=>{
    if(data){
      console.log(data);
    }
    else{
      console.error(error);
    }
  })
};

readme();

function writeFile(info){
  fs.writeFile('readme.txt',info,'utf-8',(error)=>{
    if(error){
      console.log(error+ " connot write the file");
    }
    else{
      console.log("Successfully write the file")
    }
  })
}

writeFile ("I am writing file")