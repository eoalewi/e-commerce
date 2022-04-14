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