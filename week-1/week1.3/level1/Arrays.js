// create a  arrray ;

const { merge, values } = require("lodash");

let array = [1,2,3,4,5,6,7,8,9,10];
console.log(array);


// adding element in array;  push wil add elemenr from ending of the array index
array.push(11);
console.log(array);

/// Removig element from  the start of n array shift()
array.shift();
console.log(array);

// Removing element from last index of the array
array.pop();
console.log(array);


// log all elemen of an array using for loop

for(let i=0;i<=array.length-1;i++){
    console.log(array[i])
};

/// Another way to print the element of array  using forEach() foreach(task function as Rrgument)
// function for log element
console.log("Dekha use ho raha")
function dekha(str){
    console.log(str);
}

array.forEach(dekha);

// how to merge two array in js 

const firstArray = [1,2,3,4,5,6];
const secondArray = [7,8,9,10,11];
console.log(firstArray.concat(secondArray));
const mergedArray = firstArray.concat(secondArray);
console.log(mergedArray)


/*
JavaScript Array Methods: Overview

Before diving into the questions, here’s a quick overview of some commonly used array methods:

1. push(): Adds an element to the end of an array.
*/
const newArray =[1,2,3,4,5,6,7,8,9,10];
//add 11 in the end of an array
newArray.push(11+"D");
console.log(newArray)

/*
2. pop(): Removes the last element of an array.
*/  // 11 will be removed
newArray.pop();
console.log(newArray)


/*

3. shift(): Removes the first element of an array.
*/ // will remove from the 1;


newArray.shift();
console.log(newArray);

/*
4. unshift(): Adds an element to the beginning of an array.
*/  // thsi will add back 1 in first postion of the array
newArray.unshift(1);
console.log(newArray);

/*

5. map(): Creates a new array with the results of calling a function on every element.  
 this map funtiton take function as argument 
 */
// function for menuplate the element

 /*


6. filter(): Creates a new array with elements that pass a test.
filter is used to create a new aarray containing element from existing array that satisfy a specific condition (or pass the test ) it
does not modify the orginal array :instead it return new filtered array*/


const numbers = [1,2,3,4,5,6,7,8,9,10];
const numbersResult = numbers.filter(function(num){
    return num%2==0;
})
console.log(numbersResult)


// using Arro function 
const OnArrowdata = [12,24,48,96];

const OnArrowdataresult  = OnArrowdata.filter((i)=>{
    if(i%2===0){
        return  i
    }
})

console.log(OnArrowdataresult);

// Third methods to do that
const students = [
    {name:"Alex",grade:89},
    {name:"Simon",grade:45},
    {name:"Jhon",grade:75}
];

const passedStudent  = students.filter((student)=>{
    if(student.grade>=50){
        return student;
    }
})

console.log(passedStudent);


// real world example ;
// filter Evene numbers

const numbertoCheck = [1,2,3,4,5,6,,8,9,10];
const numbertoCheckresult = numbertoCheck.filter(number =>number%2===0);
console.log(numbertoCheckresult)


// filter active user from database;
const user = [
    {id:1,duserName:"Alex",active:true},
    {id:2,userName:"pANKJA",active:true},
    {id:3,userName:"sAKTIMAN",active:false},
    {id:4,userName:"Anuraj",active:false}]

    const ActiveUser = user.filter(user=>{
        if(user.active){
            return user;
        }
    })
    console.log(ActiveUser)

    // filtering Product by price range

    const product = [
        {id:1,productNmae:"Laptop",price:500},
        {id:2,productNmae:"Laptop",price:1500},
        {id:4,productNmae:"Laptop",price:830},
        {id:5,productNmae:"Laptop",price:300},
        {id:6,productNmae:"Laptop",price:380},
        {id:7,productNmae:"Laptop",price:400}
    ];

    const filteredProduct = product.filter((item)=>{
        if(item.price<=400){
            return item;
        }
    })
    console.log(filteredProduct);


    // filter the user who have not entered Age in data base
    const UserDatabase = [
        {id:1,user:"ALex Murmu",age:[25,5,2003],address:"Dumka",mobile:767850977},
        {id:2,user:"ALex Murmu",age:undefined,address:"Dumka",mobile:767850977},
        {id:3,user:"ALex Murmu",age:undefined,address:"Dumka",mobile:767850977},
        {id:4,user:"ALex Murmu",age:[25,5,2003],address:"Dumka",mobile:767850977},
        {id:5,user:"ALex Murmu",age:undefined,address:"Dumka",mobile:767850977},
        {id:6,user:"ALex Murmu",age:[25,5,2003],address:"Dumka",mobile:767850977},
    ];

    // console.log(UserDatabase);

    const NanUserDob = UserDatabase.filter((user)=>{
        if(user.age == undefined){
            return user;
        }
    })

    console.log(NanUserDob)

    // filtered the task with completion satus
    const  task  = [
        {task:"Task 1", compeleted:true},
        {task:"Task 2", compeleted:false},
        {task:"Task 3", compeleted:false},
        {task:"Task 4", compeleted:true},
        {task:"Task 4", compeleted:false}
    ];
    const compeletedtask = task.filter((item)=>{
        if(item.compeleted){
            return item;
        }
    });
    console.log(compeletedtask)

/*  
7. reduce(): Reduces the array to a single value by applying a function.
reduce method is js is used to execute a reducer functon on each element of an array, resulting in a single accumulated output value >it is typically used 
calculet single value (e: sum,product,) or transform an array into another structure like an object>
it's requires callback function applied to eacharra of element


*/
// using arrow function
const numberof =[1,2,3,4,5,6,7,8,9,10];
const result = numberof.reduce((first,current)=>first+current,0)
console.log(result);

// using traditional function
const numberof2 =[1,2,3,4,5,6,7,8,9,10];
const result3 = numberof2.reduce(function(acc,current){
    return acc+current;
},0)
console.log(result3)

// Method to transforming array into an object,
const ara = ["apple","mango","banana","orange","apple","mango","apple","apple","mango","banana",'orange',"pineapple"];
const  appresult = ara.reduce((acc,fruit)=>{acc[fruit]=(acc[fruit] || 0)+1; return acc},{});
console.log(appresult);

// second method 
const appresult2 = ara.reduce((acc,fruit)=>{
    if(acc[fruit]){
        acc[fruit]+=1;
    }
    else{
        acc[fruit]=1;
    }
    return acc;
}
,{});
console.log(appresult2)

//calculate expenses

const amout = [200,200,300,400,120,456,78,658];
const amountresult = amout.reduce((acc,amount)=>{
    return acc+amount;
},0);

console.log(amountresult);

// flatening a nested array ;
const nestedArray = [[1,2],[3,4],[5,6],[7,8]];
const nestedresult = nestedArray.reduce((acc,item)=>{
   return acc.concat(item)
},[]);
console.log(nestedresult);

// count the accurance in array 
const arrayofcolor =["red",'blue','orange','purple','red','orange','orange','orange','purple','sky'];
const colorResult = arrayofcolor.reduce((acc,color)=>{
         acc[color]=(acc[color] || 0)+1;
         return acc;
},{});
console.log(colorResult)

/*
8. find(): Returns the first element that satisfies a condition.;
*/
 const numberdivs2 = [1,11,3,15,14,26,45];
 const numberdivs2result  = numberdivs2.find(item=>item%2==0);
 console.log(numberdivs2result);
 

 const newpeople = [
    {id:1,user:"Alex",age:22,DOB:'2003-05-25',address:"Dumka"},
    {id:2,user:"Simon",age:25,DOB:'1999-05-25',address:"Dumka"},
    {id:3,user:"Reshmi",age:28,DOB:'1996-05-25',address:"Dumka"},
    {id:4,user:"Albinus",age:54,DOB:'1969-05-25',address:"Dumka"}
 ];
 const newredu = newpeople.find(item=> item.age<30);
 console.log(newredu)
 

/*

9. findIndex(): Returns the index of the first element that satisfies a condition.
*/
const npm = [1,2,3,4,5,6,7];
const npmans = npm.findIndex((i)=>{
    console.log(i);
    if(i%2===0){
        return true;
    }
    else{
        return false;
    }
});
console.log(npmans);

/*


10. forEach(): Executes a provided function for each array element.


11. some(): Checks if at least one array element satisfies a condition.


12. every(): Checks if all array elements satisfy a condition.


13. includes(): Checks if an array contains a certain value.

/*
14. sort(): Sorts the elements of an array.
*/

const orderWise =(word)=>{
    const input = word.toLowerCase();
    console.log(input)
// const ans = input.sort();
// console.log(ans);
}
const word = "sdTsdnaPn"
orderWise(word)

/*
15. splice(): Adds/removes elements at a specific index.
*/
let arrays = [1,2,3,4,5,6,7];
const arrays2 =arrays.slice(1,5);  // start index and end index where it 
console.log(arrays2)

/*

16. slice(): Returns a portion of an array.


17. concat(): Merges arrays into one.
*/
const ar1 =[1,2,3,4];
const ar2 =[5,6,7,8,9];
const are = ar1.concat(ar2);
console.log(are)

/*


18. indexOf(): Returns the first index of a specified value.
*/
const ans2 = ar1.indexOf(2);
console.log(ans2)

/*

19. reverse(): Reverses the array.

/*
20. join(): Joins all array elements into a string.
*/
 const spreadArray = ["s","f","a","c","u","k"];
 const joinedArrayOfString = spreadArray.join("");
 console.log(joinedArrayOfString);


/*
---

Practice Questions

Here are 10 questions for each level, from beginner to advanced:


---

Beginner Level

1. Create an array of fruits and use push() to add "Orange".
*/
const fruitArray = ["apple","mango","orange","banana"];
fruitArray.push("carrot0");
console.log(fruitArray);
/*


2. Remove the last element of an array using pop() and print the updated array.
*/
fruitArray.pop();
console.log("after pop ",fruitArray);   // pop remove element from last

fruitArray.shift();
console.log("after shift ",fruitArray);      // shift remove element from start 

/*


3. Add "guava" to the beginning of an array using unshift().
*/
fruitArray.unshift("guava");  // add element in first
console.log(fruitArray);

/*


4. Use shift() to remove the first element of an array.


5. Find the index of "Banana" in an array using indexOf().
*/
const ap = fruitArray.indexOf("banana");
console.log(ap);

/*

6. Check if the array includes "Apple" using includes().
*/

const ans4 = fruitArray.includes("orange");
const ans5 = fruitArray.includes("apple");
console.log(ans4," ",ans5)

/*


7. Sort an array of numbers [3, 1, 4, 2] in ascending order using sort().
*/
const unsortArray = [3,1,4,2];
const ans6 = unsortArray.sort((a,b)=>{return a-b});
const ans7 = unsortArray.sort((a,b)=>a-b);
console.log(ans6, " ",ans7)

/*


8. Create an array of colors and use join() to convert it into a single string.
*/
const arrayofcolor1 =["red",'blue','orange','purple','red','orange','orange','orange','purple','sky'];
const ans8 = arrayofcolor1.join('');
console.log(ans8)

/*


9. Extract the first three elements of an array using slice().
*/
const ans9 = arrayofcolor1.slice(0,3);
console.log(ans9)

/*
10. Merge two arrays, [1, 2] and [3, 4], using concat().
*/
const ans10 = arrayofcolor.concat(arrayofcolor1)
console.log(ans10)

/*
---

Intermediate Level

1. Use map() to multiply each element in an array by 2.
*/
const anArray = [1,2,3,4,5,6,7,8,9,10];
const ans11 = anArray.map((i)=>i*2);
console.log(ans11);

/*
 
2. Use filter() to extract even numbers from an array of [1, 2, 3, 4, 5, 6].
*/
const ans12 = anArray.filter((i)=>i%2==0);
console.log(ans12);

/*


3. Find the first number greater than 10 in [5, 8, 11,12, 20] using find().
**/
const q1 = [5, 8, 12, 20];
const ans14 = q1.find((i)=>i>10);
console.log(ans14);


/*


4. Check if all numbers in [5, 10, 15] are greater than 3 using every().
*/
const q2 = [5, 10, 15];
const ans15 = q2.every((i)=>i>3);
console.log(ans15);



/*

5. Check if any number in [2, 5, 8] is divisible by 2 using some().
*/

const q3 =[2, 5, 8];
const ans16 = q3.some((i)=>i%2==0);
console.log(ans16);


/*


6. Reverse an array [1, 2, 3, 4] using reverse().





7. Use splice() to remove the second element from an array and add two new elements.
*/
 const q4 = ["red",'blue','orange','purple','red','orange','orange','orange','purple','sky'];
 const ans17 = q4.splice(1,1,"ap","dp");
 console.log(q4)

/*

8. Use reduce() to find the sum of an array [1, 2, 3, 4].
*/
const q5 = [1, 2, 3, 4];
const q5ans = q5.reduce((accumulator,currentValue)=>{
   return accumulator+currentValue;
},0);
console.log(q5ans)
/*

9. Use findIndex() to find the index of the first element divisible by 3 in [2, 4, 6, 9].
*/
const q6 = [3, 1, 7, 9];
console.log(q6.findIndex((i)=>i%2==0));

/*


10. Use forEach() to print all elements of an array multiplied by 2.




---

Advanced Level

1. Write a function that flattens a nested array (e.g., [[1, 2], [3, 4]] → [1, 2, 3, 4]).


2. Use reduce() to group an array of numbers into even and odd arrays.


3. Use filter() to remove duplicate elements from [1, 2, 2, 3, 4, 4, 5].


4. Combine map() and reduce() to find the total of squares of an array [2, 3, 4].


5. Create a function to chunk an array into smaller arrays of a given size.


6. Use some() and every() to verify if all numbers in an array are positive.


7. Use sort() with a comparator function to sort an array of objects by a property (e.g., age).


8. Write a function to rotate an array by k steps using splice() and concat().


9. Use reduce() to count the occurrences of each element in an array (e.g., [1, 1, 2, 3]).


10. Create a function that returns all possible subsets of an array (power set).




---

These questions cover basic to advanced use cases of JavaScript arrays and their methods, ensuring a gradual increase in difficulty. Let me know if you'd like detailed solutions for any of these!

*/

