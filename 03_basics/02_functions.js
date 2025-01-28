// applications of functions in shopping cart
// For ex - in shopping cart we don't know how many items user gonna add, so we can't have finite number of parameters in function defination

// Rest operator - ...

function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200, 400, 500, 100, 2000))


function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200, 400, 500, 100, 2000))  
//val1 - 200, val2 - 400, rest - ...num1


// Handling objects in functions
const user = {
    username: "Ashish",
    price: 199
}


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})


//Using arrays in functions
const myNewArray = [200, 400, 100, 600, 500]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 220, 300]));
