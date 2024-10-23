// conditional operation 
// if else allow you to yes or no based condition that you applied

//let see

const isMerried = false;
if(isMerried==true){
    console.log("Yes the person is Merried");
}
else{
    console.log("No the person is not Merried")
}

// 

// check the number is positive or negative 

function Positive_Negative_check(number){
 if(number>0){
    console.log("Positive Number "+number)
 }else{
    console.log("Negative number "+number)
 }
}
// call fn
Positive_Negative_check(0);

// 2. Check if a number is Odd or even
function oddEven(number){
 if(number%2==0){
    console.log("Even Number "+number);
 }else{
    console.log("Odd number "+number);
 }
}
// call fn
oddEven(12);

// 3. check if a number id divisible by 5

function divsBy5(number){
  if(number%5==0){
    console.log("Number is divisible by "+5);
  }
  else{
    console.log("Number is Not Divisbile by "+5)
  }
}
// call fn
divsBy5(23);

// 5.check if number is divisible by both 5 and 3

function divsBy5_3(number){
    if(number%3==0 && number%5==0){
        console.log(number +" is divisible by both "+5 +" and "+3)
    }
    else if(number%5==0){
        console.log(number +" is divisible by "+5+" only");
    }
    else if(number%3==0){
        console.log(number +" is divisible by "+3+" only");
    }else{
        console.log(number +" is Not divisible by Both");
    }
}
// call fn
divsBy5_3(6);
// 6. Check if a number is divisible by 7 or 11.


 function check7or11(number){
    if(number%7==0 && number%11==0){
        console.log(number +" is divisible by both number "+7 +" and "+11);
    }else if(number%7==0){
        console.log(number +" is divisible by "+7+" only");
    }
    else if(number%11==0){
        console.log(number +" is divisible by "+11+" only");
    }else{
        console.log(number +" is Not divisible by Both");
    }
 }

 // call bn

 check7or11(22)

 // 7.  check if year is leaf year or not

 function leafYearCheck(year){
    if(year%4==0){
        console.log(year +" is Leaf year");

    }else{
        console.log(year +" is not a leaf year");
    }
 }
 leafYearCheck(2004);

// 8. Check if a string is empty or not

function emptystringCheck(word){
    const word2 = word.trim();
    if(word2==""){
        console.log("Empty String");
    }
    else{
        console.log(word2 +" has characters")
    }
}
// call fn
emptystringCheck(" ");
emptystringCheck("          F")



// 9. check if two number are equal 

function checkEqual(number,number2){
 if(Number(number)===Number(number2)){
    console.log("Yes Number is equal")
 }
 else{
    console.log("NO Number is Not equal")
 }
}

checkEqual(45,"fdffd45")
checkEqual(12,12)
// 10. Check if the first number is greater than the second.

const checkgreaterOne=(a,b)=>{
    if(a>b){
        console.log(a+" = A is greater then B = "+b);
    }
    else{
        console.log(b+" = B is greater then A = "+a)
    }
}
checkgreaterOne(12,13)
checkgreaterOne("Sdsasddd","Ddsdsdsasasa");

// 11. check if a character is vowels or consonant

const consonantORvowels=(a)=>{
    if('aeiou'.includes(a)){
        console.log("Yes Vowels char")
    }
    else{
        console.log("No it is an Consonant")
    }
}
consonantORvowels("a")
// For Number
const number=(a)=>{
    if('123456'.includes(a)){
        console.log("Yes belongs to 123456")
    }
    else{
        console.log("No it is not ")
    }
}
number("7")

// 12. Check if a number is positive, negative, or zero.

const posiNagiZero=(a)=>{
    if(a>0){
        console.log("Number is Positive");
    }
    else if(a<0){
        console.log("Negative");
    }
    else if(a==0){
        console.log("Zero")
    }else{
     console.log("nOT A nuMBER")
    }
}
posiNagiZero(12);


// 13. Check if a person is eligible to vote (age ≥ 18).

const eligible=(age)=>{
    if(age>=18){
        console.log("Your Eligible");
    }
    else{
        console.log("You are not eligible");
    }
}

eligible(900);

// 14. Check if a student passed or failed (pass mark is 40).
const passCheck =(math,science,hindi)=>{
    if(math>=40 && science>=40 && hindi>=40){
        const final = math+science+hindi;
        console.log("PASSED in every sub");
    }
    else{
        console.log("FAILED")
    }
}
passCheck(4,0,40)

// 15. Check if the temperature is above freezing (0°C).
const chectemp=(temp)=>{
    if(temp<=0){
        console.log("Freezing");
    }
    else{
        console.log("below Freezing")
    }
}
chectemp(1);

// 16. heck if a number is within the range 10-20.

const checkRange=(input)=>{
    if(input>=10 && input<=20){
        console.log("Yes it is in range")
    }
    else{
        console.log("Out of Range");
    }
}
checkRange(12)


// .17 Check if a number is greater than 100.
const checkGreaterthen100=(a)=>{
    if(a>100){
        console.log("greater then 100");
    }else{
        console.log("No not greater then 100")
    }
}
checkGreaterthen100(99);

// .18 Check if a word contains the letter "a".

const containCheck=(a)=>{
    if(a.includes("a")){
        console.log("Yes it contain");
    }
    else{
        console.log("No Not contain")
    }
}
containCheck("apple");

const lettercheck=(word)=>{
 if(word.includes("apple")){
    console.log("Yes contain")
 }else{
    console.log("Not contain")
 }
}

lettercheck("appe is greate");

// .19 Check if a number is prime.
let isPrime = true;
const checkPrime =(num)=>{
    if(num<=1){
        isPrime = false;

    }
    for(let i=2; i< num; i++){
        if(num%i===0){
            isPrime = false;
        }
 }
 if(isPrime){
    console.log("Prime ");
 }
 else{
    console.log("Not a prime")
 }
}
checkPrime(3)

// 20. Check if a string is a palindrome.

const isPalidrome =(input)=>{
    //cleaning input removing extra spcae
    let cleanInput = input.trim();
    // let reverse the string 
    let checkpaline = cleanInput.split("");
    let newinput = [];
    for(let i=checkpaline.length-1; i>=0;i--){
       newinput.push(checkpaline[i]);
       
    }
    let output = newinput.join('');
    
    if(input===output){
        console.log("IS palindrome");
    }
    else{
        console.log("No not a palin")
    }
}
    // let reverse the string  other method
    let input = "apple"
    let reverse = input.split('').reverse().join('');
    console.log(reverse);

isPalidrome("aappaar")

// 21. Check if the input is a number.
 const checkinputIsNumber = (num)=>{
    if(typeof num ==='number'){
        console.log("number");
    }
    else{
        console.log("Not a Number");
    }
 }
 checkinputIsNumber("12")

 // 22. Check if a string contains only numbers.
 const checkStringcontainNumber =(string)=>{
    if(/^\d+abc$/.test(string)){
        console.log("Contain only numbers")
    }
    else{
        console.log("Contain Other Character also")
    }
 }
 let s = "1255454abc"
 checkStringcontainNumber("12465456abc")

 // 23. check if a array is Empty
 const checkArrayIsEmpty =(array)=>{
    if(array.length==0){
        console.log("Empty Array")
    }else{
        console.log("Array is noT Empty")
    }
 }
 let ar =[];
 let ar2=[1,2,6,4,45]
 checkArrayIsEmpty(ar)
 checkArrayIsEmpty(ar2)
 // 24 Check if a number is odd and greater than 20.
 const checkOddandgreaterthen20=(num)=>{
    if(num%2==!0 && num>=20){
        console.log("number is greater then 20 and is Odd "+num)
    }
    else{
        console.log("number Not a odd and")
    }
 }
 checkOddandgreaterthen20(21)

 // 25. Check if the length of a string is more than 5 characters.
 const lengthofstring=(string)=>{
  let length = string.length;
  if(length===5){
    console.log("Yes lenght is 5")
  }
  else{
    console.log("greater then the 5")
  }
}
lengthofstring("abcde");


// 26. Check if a day is a weekday or weekend.
 const checkWeekend= (day)=>{
    if(day=="sunday" || day=="saturday"){
        console.log("Weekend "+day)
    }
    else{
        console.log("Not a weekend")
    }
 }
 checkWeekend("saturday");

 //27. Check if a student has passed in all subjects (marks > 35 in 3 subjects).
 const checkPass =(math,chemistry,physics)=>{
    let mark = math+physics+chemistry;
    if(math>=35 && physics>=35 && chemistry>=35){
       
        console.log("PASSED  "+mark)
    }
    else{
        console.log("FAILED "+mark)
    }
 }
checkPass(35,30,35);

// 28. Check if a number is greater than 50 but less than 100.

const checklessandGreater =(num)=>{
    if(num>=50 && num<=100){
        console.log("number is greater then 50 and less then 100");
    }
    else{
        console.log("Not")
    }
}
checklessandGreater(12)
// 29. Check if a triangle is valid (sum of angles = 180).

const checkangle =(angleA,angleB,angleC)=>{
    let sumOfAngle = angleA+angleB+angleC;
    if(sumOfAngle===180){
        console.log("this is Triangel")
    }
    else{
        console.log("Not a valid traingle")
    }
}
checkangle(60,60,61)
checkangle(60,60,60);

// 30. Check if a number is positive, negative, or zero using nested if-else.
const checkposneg=(num)=>{
    if(num>0){
       console.log("number is Positive");
    }
    else if(num<0){
        console.log("negative");
    }else{
        console.log("Number is Zero")
    }
}

checkposneg(-45)


// 31. Check if a number is a multiple of 4.
const multipleof4 =(num)=>{
    if(num%4==0){
        console.log("number is Multiple of 4")
    }
    else{
        console.log("Not a Multiple of 4")
    }
}
multipleof4(12);

// check if the time is is morining 
const time = new Date().getHours();
console.log(time)

const greetmna=(time)=>{
    if(time>6 && time<12){
        console.log("morning")
    }
    else if(time>12 && time<18){
        console.log("Afternoon")
    }
    else{
        console.log("Night")
    }
}
greetmna(13);

// 37.  check if a string contain both lowercase and upperCase and lowercase 

const lowercaseotUppercase =(string)=>{
    let uppercae = /[A-Z]/;
    let = lowercase = /[a-z]/;
 if(uppercae.test(string)){
    console.log("String has Uppercase letter")
 }
else if(lowercase.test(string)){
    console.log("LOwercase")
}
}
lowercaseotUppercase("sSDASsD");

// 38. check if a number is perfect square 

const isperferfectSqure =(number)=>{
    if(number<0){
        return false;
    }
    let i =0;
    while(i*i<number){
        i++
    }
    if(i*i===number){
        console.log("Squre "+i)
    }
}
isperferfectSqure(16)
isperferfectSqure(121)

// 39. check if the year is century or not 

const isYearCentury =(year)=>{
    if(year%100===0){
      return "Yes Year is Century";
    }
    else{
        return "No year is not a Century"
    }
}

console.log(isYearCentury(1920));

// 40. Check if a number is prime using nested if-else.

const isprime=(number)=>{
    const isprime= true;
    if(number<0){
        const prime = flase;
        return prime;
    }
    for(let i=2;i<number;i++){
        if(number%i===0){
         
         return isprime;
        }
        else{
            return isprime =false;
        }
    }
}

console.log(isprime(7))







 