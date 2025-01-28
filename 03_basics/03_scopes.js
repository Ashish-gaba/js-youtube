//Ex-1

var c = 300  // Global scope

if (true){
    let a = 10              
    const b = 20        //Block scope
    var c = 30
}

// Note - values of block scope should not go in global scope but this is a problem with var therfore avoid using var


// console.log(a);
// console.log(b);
console.log(c);


//Ex-2
var c = 300  
let a = 300
if (true){
    let a = 10              
    const b = 20
    var c = 30
    console.log("INNER: ", a)
}

console.log(a);


//Ex-3
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}


//NOTE - GLOBAL SCOPE is different in node environment(windows) and browser console environment



