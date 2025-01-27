// /*
// Datatypes can be categorized 2 types based on how they are stored & accessed in memory -
// 1. Primitive
// 2. Non-Primitive (Refrence type)
// */

// // # Primitive Datatypes (Call by value -- changes in copy)

// // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail; //undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3415265634353245325n



// // # Reference Type (Non-Primitive Datatypes)- all are ojects datatpes

// // Arrays, Objects, Functions

// const heroes = ["shaktiman", "naagraj", "hanuman"]

// //Object
// let myObj = {
//     name: "Ashish",
//     age: 22,
// }

// //function
// const myFunction = function(){
//     console.log("Hello World");
    
// }



// console.log(typeof bigNumber);
// console.log(typeof outsideTemp); // datatype of null is object

// console.log(typeof heroes); // object function

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// ***************** Memory ******************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "ashishgaba.com"

let anothername = myYoutubename
anothername = "chaicode"

console.log(myYoutubename);
console.log(anothername);


// Call by Reference - stored in heap - changes are captured in original value
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "ashish@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


