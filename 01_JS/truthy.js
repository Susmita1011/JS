/*
Falsy values:
false , 0 , -0, BigInt 0n , "",null, undefined, NaN
except the above all are considered True 
Some surprising truthy value:
"0", [], 'false' , " ",{}, function() {}
*/

// const emptyObj = {}
// //Object.keys(emptyObj) returns the array with all the keys in the Object
// if(Object.keys(emptyObj).length === 0) console.log("Empty Objject");
//------------------------------------------------------------------------------------------------
// Nullish Coalescing Operator (??) :null undefined

/*
here evrything is on null and undefined
created to handle the null or undfeined case
*/
//val1 = 5??10  --> 5
//val1 = null ??10 --> 10
// val1 = undefined??15  --> 15
//val1 = undefined ?? 10 ??20 --> 10 first value assigned
//console.log(val1); //5 assigned

// Ternary Operator 

// condition ?true:false

//(10<9)?console.log("less"):console.log("greater"); // dont return anything 
// only does a if else condition but returns nothing
//console.log(val1);



