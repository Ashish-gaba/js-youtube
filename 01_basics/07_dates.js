 // Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

console.log(typeof myDate); //INterview -- date object

// let myCreatedDate = new Date(2023, 0, 23) // Month start from 0
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now() //gives millisecond value
// console.log(myTimeStamp);  
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); //to convert to seconds - interview

let newDate = new Date()
console.log(newDate.getMonth() + 1); //Generally we use getMonth() + 1
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is...`

//Useful method
newDate.toLocaleString('default', {
    weekday: "long", 
})
