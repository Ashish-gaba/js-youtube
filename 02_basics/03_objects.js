// Objects can be declared in two ways - literal and constructor(singleton object)

// singleton object created using constructors
// Object.create


// Object Literals - ways to declare object
// objects has keys, values

const mySym = Symbol("Key1")

const JsUser = {
    name: "Ashish",
    "full name": "Ashish Gaba",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "ashish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// To access values of object
console.log(JsUser.email); // Generally this used
console.log(JsUser["email"]); //Better method
console.log(JsUser["full name"]);
console.log(JsUser[mySym])

// To modify values of object
JsUser.email = "ashish@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ashish@microsoft.com"
console.log(JsUser);


//Adding functions to objects
JsUser.greeting = function(){
    console.log("Hello JS user");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   //Taking variable from same object
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

