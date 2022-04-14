// Let & Const

const name = "Max";
let age = 29;
const HasHobbies = true;

name = "Maximilian"
age = 30;

function summarizeUser(userName, userAge, userHasHobbies) {
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