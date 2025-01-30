//THIS keyword
//used whenever we want to refer current context

// const user = {
//     username: "Ashish",
//     price: 999,

//     welcomeMesssage: function(){
//         console.log(`${this.username}, Welcome to website`);
//         console.log(this);
        
//     }
// }


// user.welcomeMesssage()
// user.username = "Sam"
// user.welcomeMesssage()


// console.log(this); 

//Note - if we run console.log(this) in node environment it will return empty object as no global object is declared but when you run console.log(this) in browser it will return 'Windows' object which is global object in browser


// ARROW Functions

// function chai(){
//     let username = "Ashish"
//     console.log(this.username); //returns undefined
// }

// //therfore we are not able to this in functions only in objects
// chai()


// const chai = function(){
//     let username = "Ashish"
//     console.log(this.username); //also returns undefined
    
// }
// chai()


const chai = () => {
    let username = "Ashish"
    console.log(this); //also returns undefined
    
}
// chai()

// ** SYNTAX ** - ARROW FUNCTION () => {}

//Explicit arrow function (using return keyword)
//     const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// console.log(addTwo(3, 4));


// implicit arrow function
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
// //Note - when {} curly braces - use return keyword, otherwise not req

const addTwo = (num1, num2) => ({username: "Ashish"})

console.log(addTwo(3, 4));



///arrow functions in loops
 const myArray = [2, 5, 3, 7, 8]

myArray.forEach(() => ())




