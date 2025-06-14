// // Date Object represent a single moment in a platform. an arbitary data Jan 1,1970 UTC was choosen
// // Date is calculated from that time in milliseconds . Temporal API is a proposal for defining Date as Global object
// // Dates

// let myDate = new Date()
// console.log(myDate);  // 2025-06-14T14:54:41.775Z 
// console.log(myDate.toString());  // Sat Jun 14 2025 14:55:25 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  // Sat Jun 14 2025
// console.log(myDate.toLocaleDateString());   // 6/14/20
// console.log(myDate.toLocaleString());   // 6/14/2025, 3:07:12 PM
// console.log(typeof myDate); //Object

let myDate = new Date(2023,0,23) //(year ,month, date) month starts from 0 in JS --> 23/Jan/2023
console.log(myDate.toString());
let newDate = new Date("2023-01-14"); //here we cn define jan as 01

let TimeStamp = Date.now()  // in miliseconds : 1749914064618
//console.log(TimeStamp);
//console.log(myDate.getDate());
//console.log(Math.floor(Date.now()/1000));  // to convert in seconds  --> 1749914223

console.log(myDate.toLocaleString('default',{
    weekday: "long",  // instead of Mon it gives Monday
}));







