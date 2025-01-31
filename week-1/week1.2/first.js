/*
Variable (let ,var , const )
Data type - String ,Number,and Boolean 
if Else
Loop - for loop

*/


/* Let Write some code  ---
1. Write a program to greet a person given their First and last name
2. Write a program that greet a person based on their gender . (if else)
3. Write a program that count from 0 - 1000 and print (for loop);

*/

// 1. 
function greet(firstName,lasName){
      setTimeout(() => {
        console.log(`Hello ${firstName} ${lasName}`)
      }, 1000);
};

greet("ALex","Murmu"); // greet after a second


// 2. 

function greetBasedOnGender(name,gender){
     if(gender=="male"){
        console.log(`Hello Mr ${name} `)
     }
     else{
        console.log(`Hello Miss ${name}`)
     };
}

greetBasedOnGender("Alex","male");


//3. 

function count(){
    let counter = 0;
    for(let i =1;i<=1000;i++){
        counter+=i;
    }

    console.log(counter)
}

count();

