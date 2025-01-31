const { set } = require("lodash");

function MyOwnSettmeOut(fn,duration){
    setTimeout(fn,duration);
};

function call(){
    console.log("hello call")
}

MyOwnSettmeOut(call,2000)