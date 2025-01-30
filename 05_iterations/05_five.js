// for each lop

const coding = ["js", "ruby", "Python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
    
// } )



// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    // console.log(item);   
}

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log((item, index, arr));  
// })


// ARRAY of OBJECTS -- Important

const myCoding = [
    {
        languageName: "javascript", 
        lanugageFileName: "js"
    },
    {
        languageName: "python", 
        lanugageFileName: "py"
    },
    {
        languageName: "C++", 
        lanugageFileName: "cpp"
    },
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})



