// const { error } = require('console');
// const fs = require('fs');

// const data = fs.readFile('a.txt', 'utf-8',(error,data)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     else{
//         console.log(data)
//     }
// });
// console.log(data);

const fs = require('fs/promises'); // Promises wala fs module use karte hain

async function freadFile() {
    try {
        const data = await fs.readFile('a.txt', 'utf-8');
        console.log("File Content:", data);
    } catch (err) {
        console.log("Error:", err);
    }
}

freadFile();
console.log("last")
