
//defination
function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayMyName -- function refrence
// sayMyName() -- function execution

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, "a")
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ //username = "sam" - default
    if (username === undefined){            // can write if (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ashish"))
console.log(loginUserMessage());



