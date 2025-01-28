// const tinderUser = new Object() // singleton object

const tinderUser = {}

tinderUser.id  = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname:{
            firstName: "Ashish",
            lastName: "Gaba"
        }
    }
}

// console.log(regularUser.fullName?.userfullname.firstName) //can use "?" with objects used in apis if else


//Merging 2 objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2} // this will nest objects within objects

// const obj3 = Object.assign({}, obj1, obj2, obj4) // {}- target, obj1, obj2, obj3 - source

const obj3 = {...obj1, ...obj2} //mostly used (spread operator)
// console.log(obj3);


// when we fetch objects from database - we recieve such array of objects that we need to loop through
const users = [
    {
        id: 1, 
        email: "a@gmail.com"
    },
    {
        id: 1, 
        email: "a@gmail.com"
    },
    {
        id: 1, 
        email: "a@gmail.com"
    },
    {
        id: 1, 
        email: "a@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //returns array of keys
console.log(Object.values(tinderUser)); //returns array of values
console.log(Object.entries(tinderUser)); //returns key,value pairs

// above arrays are useful in looping through keys & values of objects

// To check whether a value exists or not in object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
