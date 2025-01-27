let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // returns 0 if value null
                            // returns NaN (not a Number) if value not have number or undefined
                            // returns boolean as 0 or 1

// "33" -> 33
// "33abc" -> NaN
// true -> 1, false -> 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 -> true, 0 -> false
// "" -> False (Empty string)
// "ashish" -> True



let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);




