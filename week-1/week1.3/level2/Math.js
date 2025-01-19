const { randomFillSync } = require("crypto");
const { max } = require("lodash");

// Math Method
function mathMethod(value){
    console.log("Original Value "+value);

    let rounded = Math.round(value);
    console.log("After Rouded "+rounded);

    let ceiling = Math.ceil(value);
    console.log("after Ceiling "+ceiling);

    let flooring = Math.floor(value);
    console.log("after flooring "+flooring);

    let randomValue = Math.random();
    console.log("after Random "+ randomValue);

    let maxValue = Math.max(12,0,20,200,501,123);
    console.log("after max"+maxValue);

    let minValue = Math.min(12,364,0,12,56,89,400);
    console.log("after Min "+minValue);

    let powerOftwo = Math.pow(value,2);
    console.log("after Power of two "+powerOftwo);

    let squareRoot = Math.sqrt(value);
    console.log("After sqrt "+squareRoot);    
}

mathMethod(4.56)