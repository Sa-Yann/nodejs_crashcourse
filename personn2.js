class PersonnClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    greeting() {
        console.log(`my name is ${this.name} and I am ${this.age} years old`)
    };
};

module.exports = PersonnClass