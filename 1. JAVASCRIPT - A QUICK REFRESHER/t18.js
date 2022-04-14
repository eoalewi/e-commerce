// Understanding Spread & Rest Operator

// Copy an Array (copiedArray) (spread operator) ([...])

const hobbies = ["Sports", "Cooking"];
const copiedArray = [...hobbies];
console.log(copiedArray);

const person = {
    name: "Max",
    age: 24,
    greet() {
        console.log ("Hi, I am " + this.name);
    }
}

const copiedPerson = {...person};
console.log(copiedPerson);

// Rest Operator is the opposite of Spread Operator KEYWORD: toArray & return

const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));