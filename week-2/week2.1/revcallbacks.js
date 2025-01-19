/*
what are callbacks in js

callbacks are the function which can be called by another function
*/
function forCall(){
    console.log("i am for call");
}

function call(fns){
    fns();
};

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSquare(a,b){
    let square1 = square(a);
    let square2 = square(b);
    return square1 +square2;
}

function sumOfCube(a,b){
    let cube1 = cube(a);
    let cube2 = cube(b);
    return cube1+cube2;
}

let ans = sumOfSquare(5,5);
let ans2 = sumOfCube(3,3);

console.log('sum fo square is :'+ans);
console.log('sum fo cube is :'+ans2);

function callme(fn,a,b){
    let value1 = fn(a); 
    let value2 = fn(a); 
    return value1+value2;
}

console.log(callme(square,2,2));