// ***************Scopes*********************

// console.log(a);
// console.log(b);
// console.log(c);

//{} // scopes
if(true){
let a = 2  // scoped within the if block
const b = 10 // scoped within the if block
var c = 30 // scoped even outside the block
d = 10 //scoped globally means scope unaware
}

// CORS or browser globalscope is different from the global scope of this nod scope
// Nested scope
/*
function one(){
   const username = "susmita"
   function two(){
     const wensite = "youtube"
     console.log("username",username)
   }
     console.log("website",website) // console.log("website",website) // error website cant be accessed outside and two() never executed
     two()
}
one()

Parents variable can be accessed by child and not the vice versa

*/

// *******************Interesting**********************
//console.log(printone(6)) //7 no error function is defined normally
function printone(num){
   return num + 1
}
// console.log(printone(5))  // 6
//addTwo(6)  // error -> cant access addTwo before initialization when func declared as variable
const addTwo = function(num){  // function declared as literal
    return num+2
}
//addTwo(6) -> 8
// ---------------> Arrow Function <------------------

/*
this --> used to refer current context this.var anme
5.35
*/






















