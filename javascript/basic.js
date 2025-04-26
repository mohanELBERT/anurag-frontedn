// console.log("Hello");

// This is a single line comment - we use "//"
/*
This is 
Multi line 
commenting
*/

// Variables - it is a named contianer which stores the values
// var, let, const

// var - can be re-declared, can be reassigned, can be accessed before initialisation
var firstName = "Mohan";
var firstName = "Venkat";
firstName = "Tharun"
// console.log("My firstname is",firstName);


// let - cannot be re-declared, can be re-assigned
let middleName = "Krish";
middleName = "tej";
// console.log("My middlename is",middleName);


// const - cannot be redelcared, cannot be re-assigned

const lastName = "maccha";
// console.log("My lastname is",lastName);



// Data Types

// Primitive Data types - number, string, undefined, null, bigint, boolean
// Non- Primitive data types - arrays, objects and functions

// array
const myArray = ["mohan", 12 ,true];
// console.log(myArray[0]);

// object - those are simply key-value pairs

const student = {
    name:"Kalyan",
    age:28,
    isScholarshipEligible:true,
    regno:"221849A2409"
}
// console.log(student.name);

// Operators 
// Arithmetic Operators: +, -, *, /, %, **, ++, --
// Assignment Operators: =, +=, -=
// Comparision Operators: ==, ===, !=, !==, >, <, >=, <=
// Logical Operators: Used for booleans &&,||, !

// Conditional Statements - if, else if, else
// sid,yas,ganesh
// let empName = "yas";
// if(empName == "sid"){
//     console.log("hi sid! welcome");
// } else if(empName == "yas"){
//     console.log("hi yas! welcome");
// } else if(empName == "ganesh"){
//     console.log("hi ganesh! welcome");
// } else{
//     console.log("sorry! you are not allowed")
// }

// Task
//  paidMoney - below 10 - you are eligible basic subscription, tax 4%
//  paidMoney - above 10 below 20 -  you are eligible medium subscription, tax 8%
//  paidMoney - above 20 -  you are eligible premium subscription, tax 16%

// let paidAmount = 10;

// if(paidAmount<10){
//     console.log("you are eligible basic subscription");
//     let taxAmount = paidAmount * 0.04;
//     console.log("your tax amount is ", taxAmount);
//     console.log("Your total incliding tax is", taxAmount + paidAmount );
// }else if(paidAmount>=10 && paidAmount<=20){
//     console.log("you are eligible medium subscription");
//     let taxAmount = paidAmount * 0.08;
//     console.log("your tax amount is ", taxAmount);
//     console.log("Your total incliding tax is", taxAmount + paidAmount );
// }else{
//     console.log("you are eligible premium subscription");
//     let taxAmount = paidAmount * 0.16;
//     console.log("your tax amount is ", taxAmount);
//     console.log("Your total incliding tax is", taxAmount + paidAmount );
// }

// let switchValue = 1;
// switch(switchValue){
//     case 1:
//         console.log("hello mohan");
//         break
//     case 2:
//         console.log("hello kalyan");
//         break
//     default:
//         console.log("Hello anonymous");
// }

// Loops - To iterate a block of code multiple times
// syntax - for(initialisation; condition; update){block of code}


// for(let i = 5; i <= 10; i++){
//     console.log(i);
// };


// while loop
// let value = 1;
// while(value < 5){
//     console.log(value);
//     value++;
// }

// do while - similar to while loop,
//           but atleast executes the code one time

// let value = 5;
// do{
//     console.log(value);
//     value++;
// }while(value<5)

// for of - used to iterate through arrays
// let arrayValues = [1,2,"data",10,true,18];
// Syntax -  for(initiation of arrayName){Code block}
// for(let arrayItem of arrayValues){
//         console.log(arrayItem * 2);
// };

// for in - used to iterate through object keys
// let studentDetails = {
//     studentName:"Pandu",
//     studentId:77,
//     isPlaced:true,
//     year:3,
//     college:"Anurag"
// };
// for(let key in studentDetails){
//     console.log(key, studentDetails[key]);
// }

// Function - A reusable block of code which can be called 
//            multiple times

// syntax - function functioName(){ code block }

// Function Declaration
// function goodMorning(){
//     console.log("good morning");
// }

// // Function Expression
// let addTwoNumbers = function(a,b){
//     console.log(a + b)
// }
// addTwoNumbers(3,4);

// function multiOfTwoNumbers(val1,val2){
//     return val1 * val2
// };
// console.log(multiOfTwoNumbers(5,5));

// let subOfTwo = (a,b) =>{ 
//     console.log(a - b);
//     console.log("Substraction of two numbers")
// };
// subOfTwo(2,1);


const sumOfSquares = (a=2,b=3) =>{
    let val1 = a*a;
    let val2 = b*b;
    return val1 + val2
} 
console.log(sumOfSquares(10,10));
