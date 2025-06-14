// Datatypes

"use strict"; // treat all JS code as newer version

// alert("hello") wont work in the nodejs but works in browser

//console.log(3*2+1); console.log("Sush") -> works but affects code readbility
//console.log(3*2+1) console.log("Sush") -> wont work

let name = "Me"
let age = 10
let isLoggedIn = false

//  range of number -> 2^53 (we have int and modifier bigint)
// string - "" or ''
// boolean -> true/false
// null -> it is a standalone value / empty
// undefined -> type assigned to variable declared but not initialized yet
// symbol  -> used in react or we are making many components to identity an component is unique, we use symbol
// object -> 
// console.log(typeof(null))  -> object type
// console.log(typeof(undefined))  -> undefined type
//  let state = null
//  let st 
//  console.table([state,st])
 /*
 ┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ null      │
│ 1       │ undefined │
└─────────┴───────────┘
*/

/*
Interview related some questions:
type of data type: 2 primitive and non-primitive
diff -> call by value and call by refernece
based on how the data is stored and accessed , there are 2 types of data types : primitive non premetive/refernec type
Primitive datatype ---> call by value
if we copy them, the original data refernce is not givn but a copy of data is given where we make changes
String, Number,Boolean,null,undefined,symbol, Bigint

Non premitive or reference type: here the memory reference is given
Array, Objects,Functions

Javscript is dynamically typed language : here we dnt have to define the variable for some specific types

*/
const score = 100
const scoreValue = 100.3
const isLogegdIn = false
const Temp = null
let useremail; // -> undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.table([id,anotherid])
console.log(id === anotherid)
/*
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ Symbol(123) │
│ 1       │ Symbol(123) │
└─────────┴─────────────┘
false
const bigIntNumber = 123789098765432n  -> ends with n
console.log(typeof bigIntNumber);  --> bigint
*/
const alpha = ['a','b','c'] // array
let myObject = {
    name: "Sush",
    age : 22
} // Object
//In JS function is treated as variable

const myFunction = function(){
    console.log("Hello World");
    
}
// console.log(typeof myFunction)
// console.log(typeof Temp)
// console.log(typeof myObject)
// console.log(typeof alpha)
// type of non primitive type is object and function is function 
