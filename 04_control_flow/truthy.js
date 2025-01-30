//Truthy-Falsy values - JS automatically assumes these values as T or F in if else conditions

// const userEmail = "a@ashish.ai"

// if (userEmail){
//     console.log("Got user email");
// } else{
//     console.log("Dont have user email");
// }

/*
// falsy values 
false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
true, "0", 'false', " ",  [], {}, function()-empty function
*/


//To detect whether arrays and objects are empty or not
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");   
// }


// false == 0  --> returns True
// false == '' --> returns True
// 0 == ''     --> returns True 


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20 //returns first value recieved other than null

console.log(val1)


// Terniary Operator
// **SYNTAX** - condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

