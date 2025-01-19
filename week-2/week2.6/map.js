const { round } = require("lodash");

const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];

const ans = arrayOfNumbers.map((num)=>{
    return num*2
});

/*
1. Map Basic Usage
Write a function squareNumbers that takes an array of 
numbers and returns a new array with each number squared.
*/
const  Input= [1, 2, 3, 4]
const squareNumber=(array)=>{
  return array.map((elemnet)=>{return elemnet*elemnet});
}
console.log(squareNumber(Input));

/*
Add a String Prefix
Write a function addPrefix that takes an 
array of strings and returns a new array with 
a prefix "Mr./Ms." added to each string.
*/

const person = ['John', 'Alice'];
const ans2 = person.map((elemnet)=>"Mr./Ms."+elemnet);
console.log(ans2);

/*
3. Double the Numbers
Write a function doubleNumbers that takes an 
array of numbers and returns a 
new array with each number doubled.
====================================

  Input: [5, 10, 15]
  Output: [10, 20, 30]
*/

const input3 = [5,10,15];
const ans3 = input3.map((elemnet)=>elemnet+elemnet);
console.log(ans3);


/*
4. Extract First Letters
Write a function extractFirstLetters that 
takes an array of words and returns an 
array of their first letters.
============================

  Input: ['apple', 'banana', 'cherry']
  Output: ['a', 'b', 'c']

*/
const Input4 = ['apple', 'banana', 'cherry']
const extractFirstLetters =(array)=>{
    
    return array.map((elemnet)=>elemnet[0])
}
console.log(extractFirstLetters(Input4))


/*
5. Capitalize Names
Write a function capitalizeNames that 
takes an array of names and returns 
a new array with the first letter 
capitalized.

===============================
  Input: ['john', 'doe']
  Output: ['John', 'Doe']
*/
const Input5 = ['john', 'doe'];

const ans5 =(array)=>{
  return array.map((person)=>{
    return person[0].toUpperCase() + person.slice(1)
  })
};
console.log(ans5(Input5))