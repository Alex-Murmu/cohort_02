const { json } = require("express");

// JSON ====> Javascript Object notation 
const Objects = {
    name:"Alex",
    address:"Asanbani",
    post:"Rajbandh",
    dist:"Dumka",
    state:"Jharkhand",
    mobile:"766785977"
};

console.log(Objects);

const newOne = JSON.stringify(Objects);
console.log(newOne);
console.log(newOne["mobile"]);

const newone2= JSON.parse(newOne);
console.log(newone2["mobile"]);


const newObject = '{"name":"Alex","address":"newaddress"}';
console.log(newObject);

const newObjectResult = JSON.parse(newObject)
console.log(newObjectResult)


const alec = { 
    name:"Alex",
    number:1235,
    Address:"NewObj",
    order:"seqeunially"
};
console.log(alec);
const result = JSON.stringify(alec);
console.log(result)