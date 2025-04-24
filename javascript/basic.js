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
let empName = "yas";
if(empName == "sid"){
    console.log("hi sid! welcome");
} else if(empName == "yas"){
    console.log("hi yas! welcome");
} else if(empName == "ganesh"){
    console.log("hi ganesh! welcome");
} else{
    console.log("sorry! you are not allowed")
}

// Task
//  paidMoney - below 10 - you are eligible basic subscription, tax 4%
//  paidMoney - above 10 below 20 -  you are eligible medium subscription, tax 8%
//  paidMoney - above 20 -  you are eligible premium subscription, tax 16%
