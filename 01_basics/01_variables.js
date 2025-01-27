const accountId = 14453
let accountEmail = "ashish1234@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 //not allowed to make changes to const

// {
//     scope (if-else, for, while)
// }

/*
Note - Prefer not to use var (only use let & const)
becuase of issue in block scope and functional scope
*/

accountEmail = "ag@ag.com"
accountPassword = "212112"
accountCity = "Bengaluru"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])