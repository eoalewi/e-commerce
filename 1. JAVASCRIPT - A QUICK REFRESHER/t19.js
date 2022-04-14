// Destructuring KEYWORD: printName

const person = {
    name: "Max",
    age: 24,
    greet() {
        console.log ("Hi, I am " + this.name);
    }
};

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

// Destructuring an Object

const person = {
    name: "Max",
    age: 24,
    greet() {
        console.log ("Hi, I am " + this.name);
    }
};

const { name, age } = person;
console.log(name, age);

// Destructuring an Array

const hobbies = ["Sports", "Cooking"];

const [Hobby1, Hobby2] = hobbies;
console.log(Hobby1, Hobby2);