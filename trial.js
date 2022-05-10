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

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }