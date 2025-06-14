// ----> Strings <-------------

 const name = "susmita"
 const repo = 10

//  console.log(name + repo)  // old way not very convinient
//  console.log(`my name is ${name} and my repo count is ${repo}`); // same like formated string in JS it is string interpolation.
 
// anotherr way to declare string using String () constructor

const myName = new String("susmita-gh")
// console.log(myName); // [String: 'susmita'] string is key and susmita is value
// console.log(typeof myName);
  // [String: 'susmita'], creates an String Obbject string is key and susmita is value
// console.log(myName[0]);//s
// console.log(myName.__proto__); // {}
// console.log(myName.length); // {}
// console.log(myName.toUpperCase()); // SUSMITA
// console.log(myName.charAt(3)); // tells what character is in which position --> m
// console.log(myName.indexOf('m')); //tells the index --> 3

const sliced = myName.substring(0,4)
// console.log(sliced); // susm same as python
// console.log(myName.substring(-1,4)); // susm this simply ignores negatiive bvaue so it is same as myname(0:4)
// console.log(myName.slice(-1,4)); // works same like py slsicing empty value

// const newName = "  Susmita   "
// console.log(newName.trim())

// susmita 
const url = "https://me.com/me%20hi%20me"
// console.log(url.replace("%20","-")); // https://me.com/me-hi%20me
// console.log(url.replaceAll("%20","-")); //https://me.com/me-hi-me

console.log(url.includes('susmita')) //false

//converting str to array based on -

console.log(myName.split("-"))//[ 'susmita', 'gh' ]
console.log(myName.split(" "));//['susmita-gh']


