const jwt = require("jsonwebtoken");


const  user = {name:"thadu",age:21,address:"Burudi"};

const token = jwt.sign({user},"mysecret");
console.log(token);

const decode = jwt.decode(token,'mysecret');
console.log(decode);

const verifytoken = jwt.verify(token,"mysecret");
console.log(verifytoken)