// Understanding Arrow Function =>

const name = "Max";
let age = 29;
const HasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobbies) => {
        return (
            'Name is ' + 
            userName + 
            ', age is ' + 
            userAge + 
            ' and the user has hobbies ' + 
            userHasHobbies 
        ); 
}
console.log(summarizeUser(name, age, HasHobbies));


function add(a, b) {
    return a + b 
}



const add = (a, b) => {
    return a + b 
}

const add = (a, b) => a + b 


console.log(add(1, 2));

console.log(summarizeUser(name, age, HasHobbies));



// SAME THING (line 22-24 = line 28-30 = line 32)

// function add(a, b) {
//    return a + b 
// }

// const add = (a,b) => {
//    return a + b;
// };

// const add = (a, b) => a + b

// TO CHANGE FUNCTION TO CONST
// Remove function and add const, =, => in place
