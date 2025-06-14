// // ----> Objects <-------------------

// // if we create object from constructor then it creates singleton object
// // create object from literals then it do not create singleton
// //Constructor Method
// // Object.create
// //Object Literals:
// const sym = Symbol("key1")
// const Jsuser = {
//     [sym]: "key1",//Actual syntax to add symbol in Object literal
//     name: "Susmita",
//     age: 18,
//     location: "Chennai",
//     email: "susmita@test.com",
//     isloggedin: false,
//     lastloggedin: ["Monday","Tuesday"],
//     "alpha bet": "S"
// }
// // //Ways to acces the values in objects
// // console.log(Jsuser['name']); // Susmita
// // console.log(Jsuser.email); // susmita@test.com
// //console.log(Jsuser.alpha bet); // error can't access with . now
// // console.log(Jsuser["alpha bet"]) // only way
// //console.log(Jsuser[sym]) //key1
// // to replace a value
// //Jsuser.name = "Namee2"

// // console.log(Jsuser['name']);//Namee2

// // Locking the values or freeze the element
// // Object.freeze(Jsuser)

// // Jsuser.name = "Namee2"

// // console.log(Jsuser['name']); /// Susmita --> values didnt change

// //console.log(Jsuser)
// /*
// {
//   name: 'Susmita',
//   age: 18,
//   location: 'Chennai',
//   email: 'susmita@test.com',
//   isloggedin: false,
//   lastloggedin: [ 'Monday', 'Tuesday' ],
//   'alpha bet': 'S',
//   [Symbol(key1)]: 'key1'
// }
// */


// // Function

// Jsuser.greeting1 = function(){
//     console.log(`Hello, ${this.name}`)
// }
// Jsuser.greeting = function(){
//     console.log('Hello JS User');
    
// }
// console.log(Jsuser.greeting); //[Function (anonymous)] --> this returns only function refrence and dnt call the function
// console.log(Jsuser.greeting1()); //makes a function call and print Hello, Susmita

// ----> part -02 <-----------------

// declaring Object using constructor
const obj = new Object()
//console.log(obj);// {} --> Singleton Object
obj.roll = 12
obj.name = "Sam"
obj.isPresent = true
// console.log(obj); //{ roll: 12, name: 'Sam' }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.name} and the roll is ${anyobject.roll}`)
// }

// handleObject(obj)

myarr = [200,300,900]

function handle(getArray){
    return getArray[1]
}

console.log(handle(myarr))









