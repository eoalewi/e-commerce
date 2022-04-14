// Refreshing Core Syntax

var name = "Max";
var age = 29;
var HasHobbies = true; 

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