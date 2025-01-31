// if else statemante;
 
/*
 if else present in all language it is sort of allow you to run some code base based on condition
 */

 // Assigenment  ==> write a code to print the the person is merried or not 

 let name = "Alex Murmu";
 let age = 22;
 let isMarried = true ;


 if(isMarried){
    console.log(name+ " Merried");
 }
 else{
    console.log(name + " Not merried ")
 }

 // let try out some test on ourself
 /*Here are 15 practice questions for if-else statements ranging from beginner to advanced:


---

Beginner Level (5 Questions)

1. Check Even or Odd:
Write a program to check if a given number is even or odd.
*/

let number = 23;
if(number%2===0){
    console.log("Even Number");
}
else{
    console.log("Odd Number")
}

/*
2. Check Positive or Negative:
Write a program to check if a number is positive, negative, or zero.
*/

if(number<=0){
    console.log("Possitve Number");
}
else{
    console.log("Negative Number");
}

/*
3. Maximum of Two Numbers:
Write a program to find the larger of two numbers entered by the user.
*/
  let num1 = parseFloat(prompt("Enter first Number"));
  let num2 = parseFloat(prompt("Enter Second Number"));
  if(num1>num2){
    console.log(num1 +" is the greatest number among "+ num1 , num2);
  }
  else{
    console.log(num2 +"  is Greates among "+num1, num2)
  }

/*
4. Leap Year Checker:
Write a program to check if a year is a leap year or not. (Hint: A year is a leap year if divisible by 4 but not by 100, except if divisible by 400.)
*/

 let year = parseInt(prompt("Enter year"));
 if(year%4===0 && year%400===0){
    console.log(year +" yes it is leaf Year");
 }
 else{
    console.log(year +" is not a leaf Year")
 }


 /*
5. Pass or Fail:
Write a program that takes a student's marks as input and prints "Pass" if the marks are 40 or above, otherwise prints "Fail."
*/

let mark = parseInt(prompt("Enter your marks"));
if(mark>=40){
    console.log("Pass");
}
else{
    console.log("Fail");
};






/*
Intermediate Level (5 Questions)

1. Find Maximum of Three Numbers:
Write a program to find the largest among three numbers.
*/
let firstNumber = parseInt(prompt("Enter First number"))
let SecondNumber = parseInt(prompt("Enter second Number"));
let thirdnumber = parseInt(prompt("Enter Third Number"));

if(firstNumber>SecondNumber && SecondNumber>thirdnumber){
    console.log("First Number is Maximum "+firstNumber);
}else if(SecondNumber>firstNumber && firstNumber>thirdnumber){
    console.log("Third Number is Maximum "+SecondNumber);
}
else{
    console.log("Third Number is maximum Number "+ thirdnumber);
}

/*
2. Grade Calculator:
Write a program that assigns grades to a student based on marks:

90 and above: A

80–89: B

70–79: C

Below 70: Fail;
*/

let bookmark = parseInt(prompt("Enter the Number"));
if(bookmark>=90){
   console.log("Grade A");
}
else if(bookmark>=80 && bookmark<=98){
    console.log("Grade B");
}
else if(bookmark>=70 && bookmark<=79){
    console.log("Grade C")
}
else{
   console.log("Fail")
}

/*
3. Odd or Divisible by 5:
Write a program that checks if a number is either odd or divisible by 5.
*/

let oddOrdi5 = parseInt(prompt("enter the number to check the odd or divisible by 5"));
if(oddOrdi5%5===0){
    console.log("Number si divisible by 5");
}
else if(oddOrdi5%2===0){
    console.log("Even Number");
}
else{
    console.log("Odd Number")
}


/*
4. Simple Calculator:
Write a program that performs basic arithmetic operations (+, -, *, /) based on user input.
*/
 const cal1 = parseInt(prompt("Enter number one to calculate"));
 const operations = prompt("enter Operation (+,-,*,/)");
 const cal2 = parseInt(prompt("Enter the number for cal"));
 if(operations=="+"){
    console.log(cal1+cal2);
 }
 else if(operations=="-"){
    console.log(cal1-cal2);
 }
 else if(operations=="*"){
    console.log(cal1*cal2);
 }
 else if(operations=="/"){
    console.log(cal1/cal2);
 }
 else{
    console.log("operation is Invald");
 };


 /*

5. Check Alphabet or Not:
Write a program to check if the entered character is an alphabet (a-z or A-Z) or not.
*/

const userInput = prompt("Enter any thing ");
let regex = /^[A-Za-z]+$/;
if(regex.test(userInput)){
    console.log("Yes this only include alphabet");
}
else{
    console.log("NO this include some Extra character "+userInput );
}





/*

Advanced Level (5 Questions)

1. Nested If - Voter Eligibility:
Write a program to check if a person is eligible to vote. Add another condition to check if the person is eligible for senior citizen benefits (age >= 60).
*/
let ageofvoter = parseInt(prompt("Enter Your age to voter illibility and or any other benifit"));
if(ageofvoter>=18){
    console.log("You can vote")
    if(ageofvoter>=60){
        console.log("Benifite of senior citizen benfit");
    }else{
        console.log("You are not a senior citizen");
    }
}
else{
    console.log("Your are not an Adult person wait untill 18 ")
}

/*
2. Triangle Validity Check:
Write a program to check if three sides can form a triangle (sum of any two sides > third side).
*/

const side1 = parseInt(prompt("enter side one"))
const side2 = parseInt(prompt("enter side two"))
const side3 = parseInt(prompt("enter side three"))

if(side1+side2>side3 && side1+side3>side2 && side2+side3>side1){
    console.log(" Can form triangle");
}
else{
     console.log("cannot form traingle");
};




/*
3. Number Classification:
Write a program that classifies a number as positive, negative, or zero, and checks if it is even or odd.
d 
*/
const user1 = prompt("enter number");

if(user1>0){
    console.log("Positive number"+user1);
}
else if(user1==0){
    console.log("Zero");
}
else if(user1<0){
    console.log("Negative");

}
else{
    console.log("invalid");
}

/*
4. Login Authentication System:
Write a program to ask for a username and password. If both match predefined values, print "Login Successful," otherwise print "Access Denied."
*/
const username = prompt("enter User name or id");
const password = prompt("Enter password");

if(username==="Alex" && password==="12345"){
    alert("Login Successful");
}
else{
    alert("Invalid user");
}


/*

5. Electricity Bill Calculator:
Write a program to calculate electricity bills based on usage:

Up to 100 units: ₹1.5/unit

101–300 units: ₹2/unit

Above 300 units: ₹3/unit
Add a surcharge of 10% for bills above ₹1000.
*/
const bill = parseInt(prompt("enter unit to calculate bill"));

if(bill<=100){
    let amount = 1.5;
    console.log("your bill is :"+amount)
}
else if(bill>101 && bill<=300){
    amount =3;
    console.log("your bill is :" +amount);
}
else if(bill>300 && bill<1000){
    amount = bill/300*3;
    console.log("your bill is :"+ amount);
}
else if(bill>1000){
    amount = bill%300*3+bill*10/100;
    console.log("your bill is : "+amount);
}

/*


Try solving these questions and let me know if you want explanations or code samples!
*/

 