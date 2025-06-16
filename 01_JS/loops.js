// for loops:

// let array = [1,2,3,4,5,6]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
    
// }



// While loop and do while:

// while (condition) {
//     //code
// }

// let myArr = [1,2,3,4]
// let i =0
// while(i<myArr.length){
//     console.log(myArr[i]);
//     i+=1;
    
// }




//do-while
// let score = 6
// do {
//     console.log(score);
//     score++
// } while (score<=5);

//Array specific loops

// for of loop

const arr = [1,2,3,4,5,6]

// for (const num of arr) { similr to python default for good to get each of the value of array,string,object
//     console.log(num);
    
// }


// Maps: holds the key value pair and remembers the order of insertion. Unique value no duplicate value

const map = new Map()
map.set('IN','India')
map.set('US','United States of America')
map.set('FR','France')
//console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'US' => 'United States of America',
  'FR' => 'France'
}
  */

// for (const [key,value] of map) {
//   //  console.log(key); // [ 'IN', 'India' ],[ 'US', 'United States of America' ],[ 'FR', 'France' ]
//     //console.log(key); // IN,US,FR
    
    
// }


//let myObj = {"IN":"India","US":"USA","FR":"France"}
// for (const [key,value] of myObj) { // cant be deconstructured myObj is not iterable
//     console.log(key);
//     console.log(value);  
    // Cant be iterated this way for object this way but Maps are itterable with for of loop [key,value]
// }
//-------------------------------------------------------------------------------

// let myObj = {IN:"India",US:"USA",FR:"France"}

// for (const key in myObj) {
//     //console.log(key); // IN,US,FR
//     //console.log(myObj[key]); // India, USA,France
    
//     //for in works with the Object and for of in MAP
// }

// let arr1 = ['js','java','py']
// for (const key in arr1) {
//    //console.log(key); // prints the index for the array
//    console.log(arr1[key]);
   
// }
// for (const key in map) {
//     console.log(key); // no output map is not itteratable
    
// }