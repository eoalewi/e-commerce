// Working with Object, Properties & Methods

const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log ("Hi, I am " + this.name + " and my age is " + this.age + ".");
    }
}

person.greet();