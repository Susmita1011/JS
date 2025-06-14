// -------> Array <-----------------------

const myNum = [0,1,2,true,"string"] // collection of the different type of data allowed
// console.log(myNum[0]);

// IN JS when in array  copy is done a Shallow Copy is created
/*
Shallow copy : the copy and original object shares the same reference. Any change to one of them will change the content as a whole
Deep Copy: copies do not share the same references so any changes to one do not change the original

*/

// other way to declare array

const myArr1 = new Array(1,2,3,4,5)
//console.log(myArr1[0]);

// Array Methods:
//myArr1.push(6) // [ 1, 2, 3, 4, 5, 6 ]
//myArr1.pop() // removes lst element [ 1, 2, 3, 4 ]
//myArr1.unshift(9) // Adds the element to array start
// myArr1.shift() // Removes element from aarray start
//console.log(myArr1);
// console.log(myArr1.includes(9))
// console.log(myArr1.indexOf(9)) // dont exists returns -1
const newArr = myArr1.join()//1,2,3,4,5
// console.log(myArr1); //
// console.log(newArr);
// console.log(typeof newArr); // string
// console.log(newArr[1]); // string --> ,

//slice , splice

// console.log("A ",myArr1);
// const myn1 = myArr1.slice(1,3) // it didnt change the original array
// console.log(myn1);
// console.log("B ",myArr1);
/*
A  [ 1, 2, 3, 4, 5 ]
[ 2, 3 ]
B  [ 1, 2, 3, 4, 5 ]
slice dont maipulate the original array
*/
// console.log("A ",myArr1);
// const myn1 = myArr1.splice(1,3) // it didnt change the original array
// console.log(myn1);
// console.log("B ",myArr1);

/*
A  [ 1, 2, 3, 4, 5 ]
[ 2, 3, 4 ]
B  [ 1, 5 ]
splice -> changes the original array 
*/
const alpha = ['a','b','c','d']
const num = [1,2,3,4]

//num.push(alpha)  //[ 1, 2, 3, 4, [ 'a', 'b', 'c', 'd' ] ]
//console.log(num[4][0]); //a

//combine = num.concat(alpha)
//console.log(combine) //[
//   1,   2,   3,   4,
//   'a', 'b', 'c', 'd'
// ]
//num.concat(alpha) // dont make changes to the original array
//console.log(num) // [ 1, 2, 3, 4 ]

//  push changes the original array itself and concat returns the changed array without making any changes to the original array

// Another way to combine array - >> spread method

// const ele = [...num,...alpha]
// console.log(ele) [
//   1,   2,   3,   4,
//   'a', 'b', 'c', 'd'
// ]
// console.log(num)

// Returns all the nested array in a single concated array
// const arr = [1,2,3,[4,5],[6,7,[8,9]]]
// const arr_1 = arr.flat(Infinity)
// // flat concatinates nested array , (give the level of nested array you want to concat,infinity means it will concat any level of nesting)

// console.log(arr_1) [1,2,3,4,5,6,7,8,9]
// console.log(Array.isArray("Susmita")); //false
// console.log(Array.from({name:"Susmita"})); //[] -->interesting
// console.log(Array.from("Susmita")); //
// //   'S', 'u', 's',
// //   'm', 'i', 't',
// //   'a'
// // ]

let s1 = 100
let s2= 200
let s3 = 300

console.log(Array.of(s1,s2,s3)); //[ 100, 200, 300 ]















