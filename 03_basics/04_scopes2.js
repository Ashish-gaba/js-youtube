// Closure - Andar ka function bahar ke variables access karskta hai but bahar ka function andar ke variables nahi access karpaat
//Bade log - chote bache - icecream - analogy


// Child functions can access parent variables
function one(){
    const username = "Ashish"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)
    
    two()
}

// one()


if (true){
    const username = "ashish"
    if (username === "ashish"){
        const website = "Youtube"
        // console.log(username + website)
    }

    // console.log(website);
    
}

// console.log(username);


//Ex-3
// ++++++++++++++++++ Interesting +++++++++++++++++++


// console.log(addone(5)) will not give error if we run here
function addone(num){
    return num + 1
}

console.log(addone(5))


console.log(addTwo(5)) // will give error as function assigned to variable
const addTwo = function(num){  // expressions
    return num + 2
}

console.log(addTwo(5))


