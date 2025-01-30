// Array specific loops

//1. for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, ,3, 4, 5]

//here object means kis cheez pe loop lagaana hai
for (const num of arr) {  
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);    
}


// Maps - similar to objects - all unique key values - key occurs in order

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States of America')
map.set('Fr', 'France')

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


// in Object
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);   //will give error - objects not iterable
// }