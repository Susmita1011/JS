// Variables Types:

// 2 types data -> constant (which will not change), variable(varying data)

const accountId = 123456  // accountId is constant and cant be changed
let accountEmail = "test@email.com" // This is scope aware {} , so it is preferred not var
var accountPassword = "password" // This is scope unaware {}, so it can be used but shouldnt be
accountCity = "Pune"

/*
Prefer not to use var because of issue in block and functional scope
using variable names without var or let is valid but shouldnt be used
This is a way of multi line comment
*/

// accountId = 2  -> TypeError: Assignment to constant variable. Not allowed
console.log(accountId);

accountEmail = "sg@sg.com"
accountPassword = "Hello"
accountCity = "Jaipur"

let accountState;
console.table([accountId,accountEmail,accountPassword,accountId,accountState])

// without initiation the variable is undefined in JS 
/*
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 123456      │
│ 1       │ 'sg@sg.com' │
│ 2       │ 'Hello'     │
│ 3       │ 123456      │
│ 4       │ undefined   │
*/
 