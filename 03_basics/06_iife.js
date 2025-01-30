// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`)
})();

// ()(); -- always use semicolon at end of IIFE to end the function an execute 2 or more iife functions in a single file  

// We use IIFE to avoid pollution from variables from Global scope


( () => {
    console.log(`DB CONNECTED TWO`);   
})();


( (name) => {
    console.log(`DB CONNECTED TWO, ${name}`);   
})("ASHISH");