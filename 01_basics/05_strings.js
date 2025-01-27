const name = "Ashish"
const repoCount = 50

// console.log(name + repoCount + "Value"); // Not good practice to use this for string concatenation


//Good Practice - String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ashish-gaba-123')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()) //Note - Original value is not changed - as primitive datatype - call by value

console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) // Can give negative values too
console.log(anotherString);

const newStringOne = "   ashish   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ashish.com/ashish%20gaba"

console.log(url.replace('%20', '-'))

console.log(url.includes('ashish'))

console.log(gameName.split('-'));






