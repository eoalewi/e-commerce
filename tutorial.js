// logger
function logger () {
    console.log ("Party Time")
    console.log ("Party Time")
    console.log ("Party Time")
    console.log ("Party Time")
}
logger ();

// function >> Adder
function adder (num1 , num2) {
    console.log (num1 + num2);
}
adder ( 5, 10 );


// functions >> Changing to Uppercase
let name = "Dev Ed";
function toUpper (text){
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}
toUpper (name);

// string concatenation
const name = "Dev Ed";
const age = "25";
console.log (`Hello It's me and my name is ${name} and my age is ${age} and I am getting old`);


// Identification of what property it is
const name = "Dev Ed";
const age = 25
const combined = name + age;
console.log(typeof combined);

const age = 25;
console.log(typeof age);

// The IF Else Statement
const age = 17;
if (age > 18){
    console.log ("You're eligible");
} else if (age < 15){
    console.log ("You're not meant to be here");
} else {
    console.log ("You're not eligible Darling")
}

// The IF Else && (and) Statement 
const dice1 = 6
const dice2 = 3
if (dice1 === 6 && dice2 === 6) {
    console.log ("You rolled a double dice");
} else {
    console.log ("You Loose");
}

// The IF Else || (or) statement
const dice1 = 6
const dice2 = 3
if (dice1 === 6 || dice2 === 6) {
    console.log ("You rolled a double dice");
} else {
    console.log ("You Loose");
}

// Printing out Index
const schedule = ["Wake", "Eat", "Sleep"];
console.log (schedule [0] );

// Adding a new value to an Array at the end (.push)
const schedule = ["Wake", "Eat", "Sleep"];
schedule.push ("Watch Netflix");
console.log (schedule);

// Removing the last value from an Array (.pop)
const schedule = ["Wake", "Eat", "Sleep"];
schedule.pop()
console.log (schedule);

// Removing the first value from an Array (.shift)
const schedule = ["Wake", "Eat", "Sleep"];
schedule.shift();
console.log (schedule);

// Adding a new value at the beginning of an Array (.unshift)
const schedule = ["Wake", "Eat", "Sleep"];
schedule.unshift("Set Alarm");
console.log (schedule);

// Getting Index
const schedule = ["Wake", "Eat", "Sleep"];
console.log (schedule.indexOf("Eat"));

// Object {} 
const user = {
    name: "Edwin",
    age: 24,
    married: false,
    purchases: ["phone", "car", "laptop"],
};
console.log(user.married);

// Loop "keyword for"
const names = ["Ed", "Moh", "Pat"];
for (name of names){
    console.log(name);
}

// Loop 
const names = ["Ed", "Moh", "Pat"];
for (name of names){
    console.log(`Hello dear ${name}`);
}

// Loop
const names = ["Ed", "Moh", "Pat"];
for (name of names){
    if (name === "Moh"){
    console.log ("Moh is in my list");
    }
}

// Loop
const names = ["Ed", "Moh", "Pat"];
for (name of names){
    console.log (name);
    if (name === "Moh"){
    console.log ("Moh is in my list");
    }
}

// Add Break to stop
const names = ["Ed", "Moh", "Pat"];
for (name of names){
    console.log (name);
    if (name === "Moh"){
    console.log ("Moh is in my list");
    break;
    }
} 