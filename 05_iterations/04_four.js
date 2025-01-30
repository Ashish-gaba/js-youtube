// for in loops

//for objects (mainly useful)
const myObject = {
    JS: "Javascript",
    cpp: "C++",
    py: "Python", 
    rb: "ruby"
}


for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for arrays
const programming = ["js", "rb", "py", "java", "cp"]

for (const key in programming){
    // console.log(key);
    console.log(programming[key]);    //for in loop returns keys
    
    
}


//maps - can't be iterated through for in loop
// const map = new Map()
// map.set('IN', 'India')
// map.set('US', 'United States of America')
// map.set('Fr', 'France')

// for (const key in map){
//     console.log(key); 
// }