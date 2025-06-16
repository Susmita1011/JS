//  // Arrow Function ad this keyword

//  const user = {
//     username : "Susmita",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome!!`); // this refers to the current context
//         console.log(this);
        
//     } 
    
// }

// // user.welcomeMessage() 
// // user.username = "Sam" // here the value or the context is changed
// // user.welcomeMessage() // this refers to Sam as context

// //console.log(this);  // {} why? beacuse here we are referring to node global object current we dont have anything so empty object
// // Brwoser global object is by default Window Object where we can see manythings in the browser
// // Node environment, global object is by default empty

// // function chai(){
// //     console.log(this)
//     /*
//     <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]
// } Global object or the this refers to all these objects within the function
//    */ 
// //}

// // chai();
// //console.log(this);  // returns empty object this refers to the node global object
// //  function a(roll){
// //     let user = "Susmita"
// //     console.log(this);  // undefined

    
// //  }
// //  a()

//  // Within Object if we use the this keyword it can access the keys and values of that Object 
//  // but within function , the this keyword cant really access the value of the function


// //  --->> Arrow Function <<-----

// // const chai = () => {
// //     let user = "Susmita"
// //     //console.log(this.user); //stil undefined
// //      console.log(this); // empty object {}
     
    
// // }
// // chai()

// /*
// basic syntax :  () => {}
//     we can also hold it in name :
//     const addd = (num1,num2) => {
//         return num1 +num2
//         }

// One more way: Implcit return 
// const add = (num1,num2) => num1 +num2
// here return keyword not needed . Good for single line code iwthin {} 

// */

// // const addd = (num1,num2) => {
// //         return num1 +num2
// //         }

// // const addd = (num1,num2) => num1+num2
// // console.log(addd(3,2));
// // used {} return should be given and in implicit return {} not there so return not needed

// //returning an object

// // const add = (num1,num2) => ({username: "Susmita"}) //wrapped around ()
// // console.log(add(2,3));


// IIFE -> Immidiately invoked FUnction exppressions


//(function definition)(function execution call)

// To decrease the impact of gloabl scope pollution we have IIFE which invokes its immidiately tod o the task

/*
(function add(){ // named IIFE as it has name add()
    console.log("DB Connected");  
})()
    */// Using Arrpow function:
//(() => console.log("DB Connected"))()

//((num1,num2) => console.log((num1+num2)))(2,3);   // unnamed IIFE

// (() => {
//     console.log("DB Connected");
    
// })(); // to end the program put ; by default in IIFE ; is not given

// ((name) =>{
//     console.log(`DB Connected by ${name}`)
// })('Susmita');

