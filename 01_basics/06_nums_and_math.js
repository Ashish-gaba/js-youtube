const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) //used commonly

const otherNumber = 23.86523

// console.log(otherNumber.toPrecision(3)) //Returns string type //priority given before decimal

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));



// ++++++++++++++++++++ MATHS +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4, 3, 6, 8))
// console.log(Math.max(4, 2, 3, 8));

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1); //Gives value between 0 and 1


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


