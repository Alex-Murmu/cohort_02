// Numbers   

// parseInt()  is globle function that convert string into number not like this "jfdjf"=56725;

// like this let amount = "45";  to let amount = 45;

function tonumber(Numbers){
    console.log(Numbers);
    console.log(parseInt(Numbers))
}
tonumber("55Amoun_fo_mango");
tonumber("45px");
tonumber("sadd45")   // only work on start
tonumber("45.2px");


// convert anything to float
function getFloat(number){
    console.log("Original : "+number);
    console.log(parseFloat(number))
}
getFloat("45psdsd");

console.log(parseFloat(12));


// Boolean

const ismarried = true;
console.log(ismarried);

const isgood = false;
console.log(isgood);;

