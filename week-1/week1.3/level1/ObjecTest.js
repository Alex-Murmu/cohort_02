const { values } = require("lodash");

const obj ={
    student:"Ajay",
    roll_no:1,
    address:"Dumka",
    stream:"cse",
    enrolledYear:2024
}

// write a function that prints only the values of object by ==|||||== Object.values(obj)
const getValues=(obj)=>{
   const value =  Object.values(obj);
   console.log("Values in array ",value);
}
getValues(obj);

// second method Object.entries

const GetValue =(obj)=>{
    const ans = Object.entries(obj).forEach(([key,value])=>{
        console.log(value)
    })
    // console.log(ans)
}
GetValue(obj)
console.log(Object.entries(obj))