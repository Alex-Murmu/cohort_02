// const { error } = require('console');
// const fs = require('fs');
// function readFilePromise(){
//   return   new Promise((resolve, reject) => {
//         fs.readFile("./a.txt", "utf-8", (error, data) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// } 

const array = [1,2,3,4,5,6,7,8,9,10];

const newData = array.forEach((i)=>{
     if(i==5)
        {    
        console.log(i);

        }
    
})
console.log(newData)