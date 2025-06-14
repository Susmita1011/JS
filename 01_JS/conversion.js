// Conversion & Operation
//let score = "33abc"
//let score = null
// let score = undefined
let score = true

// console.log(typeof(score));
// console.log(typeof score); //valid

//let valueInNumber = Number(score) // it will even work in 33abc and the value will be NaN. Ideally it shouldnt have been converted
// console.log(typeof valueInNumber); 
// console.log(valueInNumber); // NaN
// if null is converted to Number -> 0 is the value now
// if undefined then converted to NaN
// Number conversion :
// "33" = 33
// "33abc" = NaN
// null -> 0
// undefined -> NaN
// boolen true: 1, false:0

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 -> true , 0 ->false
// '' -> false , non empty str -> true

let some = 33
let stringNumber = String(some)
console.log(stringNumber);
console.log(typeof stringNumber);
