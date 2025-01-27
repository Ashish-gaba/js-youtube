// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "Hanuman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //removes last value


// myArr.unshift(9) //inserts value at start
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // all values of array are converted to comma seperated string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//Slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//NOTE - original array gets manipulated with splice operation while slice operation doesn't manipulate the original array