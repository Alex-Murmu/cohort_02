const { stubString, functions } = require("lodash");

// for loop ;
let ans = 0;
for(let i =1;i<=1000;i++){
   ans+=i;
}
console.log(ans)


/*
Here are 15 for-loop practice questions ranging from beginner to advanced levels. Each question will help strengthen your understanding of loops, logic, and problem-solving skills.


---

Beginner Level

1. Print numbers 1 to 10
Write a program to print numbers from 1 to 10 using a for loop.
*/

for(let i=1;i<=10;i++){
    console.log(i);
}


/*
2. Sum of first 10 natural numbers
Calculate the sum of the first 10 natural numbers using a for loop.
*/
let app = 0;
for(let a=1;a<=10;a++){
    ans+=a;
}
console.log(ans);

/*
3. Print even numbers between 1 and 20
Write a program to print all even numbers between 1 and 20.
*/
for(let b =1;b<=20;b++){
    if(b%2===0){
        console.log(b);
    }
    else{

    }
}

/*
4. Print elements of an array
Given an array arr = [2, 4, 6, 8, 10], use a for loop to print each element.
*/

const arr = [2, 4, 6, 8, 10];
for(let c=0;c<arr.length;c++){
    console.log(arr[c])
}


/*
5. Reverse a string
Write a program to reverse a given string (e.g., "hello" becomes "olleh") using a for loop.
*/

let string = "Hello";
let newstring ="";
for(let str = string.length-1; str>=0;str--){
   newstring+=string[str];
}
console.log(newstring)



/*
Intermediate Level

6. Find factorial of a number
Write a program to calculate the factorial of a number using a for loop.
Example: 5! = 5 * 4 * 3 * 2 * 1 = 120.
*/  let fact = 1;
 for(let num=1;num<=5;num++){
    fact*=num;
};
console.log(fact)

/*
7. Print multiplication table
Print the multiplication table for a given number (e.g., for n = 5, print 5, 10, 15, ... 50).
*/
let ans2 = 5
for(let count =1;count<=10;count++){
    console.log(count*ans2)
}

/*
8. Check if a number is prime
Write a program to check whether a number is prime using a for loop.
*/
function prime(number){
    if(number<=1){
        return false;
    }

    for(let i=2;i<=Math.sqrt(number);i++){   //  when we use the math.sqrt(2) = 1.72 like this 
        if(number%i===0){
            return false;
        }

    }
    return true;
    
}
console.log(prime(2))
console.log()
/*
9. Find the largest number in an array
Use a for loop to find the largest element in an array. Example: [1, 5, 3, 9, 2] → 9.
*/
let array = [1,2,34,8,5,65,9,7,];
let biggest = 0;
for(let i=1;i<array.length;i++){
    if(array[i]>biggest){
        biggest=array[i];
    }
}
console.log(biggest)
/*
,

10. Sum of digits in a number
Write a program to find the sum of all digits in a number. Example: 123 → 1 + 2 + 3 = 6.
*/

let ap = 112;
let anps = ap.toString();
let final =0;
console.log(anps);
for(let i=0;i<anps.length;i++){
  final+=parseInt(anps[i]);
}
console.log(final)

/*
Advanced Level

11. Generate Fibonacci sequence
Generate the first n numbers in the Fibonacci sequence using a for loop.
Example: For n = 7, output: 0, 1, 1, 2, 3, 5, 8.
*/
function fibonica(nm){
  let fib=[0,1];
  for(let i=2;i<=nm;i++){
   fib[i]=fib[i-1]+fib[i-2]
  }
  return fib
}
console.log(fibonica(5));

/*
12. Check if a string is a palindrome
Write a program to check if a string is a palindrome (reads the same forward and backward) using a for loop.
Example: "madam" is a palindrome.
*/
function palindrom(string){
    // converting into Lowercase
    str = string.toLowerCase();
    let len = str.length;
    // use the for loop to compare from both the end;
    for(let i=0;i<len/2;i++){
// if the character doesnt match 
  if(str[i]!==str[len-1-i]){
    return false;
  }
  else{
    return true;
  }
    }
}

console.log(palindrom("Appa"))

/*
13. Count frequency of elements in an array
Count how many times each element appears in an array. Example: [1, 2, 2, 3, 1, 4, 2] → {1: 2, 2: 3, 3: 1, 4: 1}.
*/
const  frequency=(array)=>{
    let ansObj ={};
    for(let i=0;i<array.length;i++){
        if(ansObj[array[i]]){
               ansObj[array[i]]+=1;
        }
        else{
            ansObj[array[i]]= 1;
        }
    }
    return ansObj;
}

let array1 = [1, 2, 2, 3, 1, 4, 2]
console.log(frequency(array1))

/*

14. Print a pyramid pattern
Write a program to print a pyramid pattern of stars (*) using nested for loops. 
  *
 ***
*****
*/
let rows = 5;
for(let i=1;i<=rows;i++){
   let space = ' '.repeat(rows-i);
   let star = '*'.repeat(2*i-1);
   console.log(space+star)
}


function pyramid(nm){
    // outer loop for each row
    for(let i=1;i<nm;i++){
        let line ="";
     // inner loop for space
     for(let j=1;j<=nm-i;j++){
        line+=" ";
     }

     // inner loop for star
     for(let k=1;k<=2*i-1;k++){
        line+='*';
     }
     // print the row;
     console.log(line)
    }

}
pyramid(4)

/*
15. Find GCD of two numbers
Use a for loop to find the greatest common divisor (GCD) of two numbers.
Example: For 12 and 15, the GCD is 3.
*/
 function Gcd(n,m){
    // initial gcd =1
    let gcdf = 1;
    for(let i=1;i<=Math.min(n,m);i++){
        if(n%i===0 && m%i===0){
        gcdf=i;
        }
    }
    return gcdf;
 }

 console.log(Gcd(12,15))

/*
---

Let me know if you'd like solutions or explanations for any of these!
*/

