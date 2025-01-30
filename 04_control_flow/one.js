// if statement

// if (condition){

// }
// Comparison operators - <, >, <=, >=, ==, !=, === (for type checking), !==

// const isUserLoggedIn = true
// if (isUserLoggedIn){

// }

// if (2 == "2"){
//     console.log("executed");
    
// }

// const temperature = 41
// if (temperature < 50){
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // will give error as power is not accessible outside the block scope


// shorthand notation
// const balance = 1000

// // if (balance > 500) console.log("test");

// if (balance < 500){
//     console.log();
// } else if (balance < 750){
//     console.log("less than 750");
    
// } else if (balance < 900){
//     console.log("less than 900");
    
// } else{
//     console.log("less than 1200");
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}