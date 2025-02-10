//Creating promises

//note - Promise is an object (READ DOCUMENTATIONS)

//Promise has 2 parts - resolve, reject
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

//Consuming promises
//.then --> resolve ---.then gives callback
promiseOne.then(function(){
    console.log("Promise consumed");
    
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
    
}).then(function(){
    console.log("Async 2 resolved");
})


//Can pass parameters in resolve()- generally object
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);//the parameters passed in resolve is taken here
})


// Chaining
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "ashish", password: "123"})
        }else{
            reject('ERROR: Something went wrong') //reject gives error
        }
    }, 1000)
})

//.then - take values, .catch - take errors
promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => { //HERE .THEN TAKES VALUES FROM PREV RETURN VAL
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected")
)

// console.log(username)



//Async await - Different syntax than .then to handle promises
const promiseFive = new Promise( (resolve, reject) => {
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong') //reject gives error
        }
    }, 1000)
})

//DRAWBACK of Async/await that it doesn't handle/catches error gracefully like .then.catch - it always expects a value whenever promise is resolved but it doesn't consider that it can be rejected too
// Wrap in try-catch block
async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    }catch (error){
        console.log(error);
        
    }
    
}

consumePromiseFive()

//Fetching data from API
//fetch takes url and returns a promise
//Using async-await function
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        
        const data = await response.json() //this also takes time -> therefore await
        console.log(data);
    } catch (error) {
        console.log("E: ", error)     
    }
    
}

getAllUsers()


// Using .then.catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)
)

//This is just for commit

// INTERVIEW QUESTION-
//PROMISE MEI aapne request kari to usme error aagya status code 404 to wo aako resolve mei milega ya reject mei
// ANs - As request execute hogyi to humesha hume response (resolve) mei hi milega as error (reject) mei tab milta jab request bhej hi nahi paata otherwise promises don't know about your error codes

