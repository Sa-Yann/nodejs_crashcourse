// ---------------------------------------
// // works with Personn2.js
// ---------------------------------------


// ---------------------------------------
// Tried nPerson is != de PersonClass
// Wrong result we only get a table where the constructor innfo but the link to the fucntion is not working
// ---------------------------------------

// const Person = require('./personn2')

// const person1 = new Person('Saiyann', 40)
// person1.greeting();

// ---------------------------------------------------------------------------------------------------
// good result the same class name is used is both the file required and the the file that is requiring
// ------------------------------------------------------------------------------------------------------

const PersonnClass = require('./personn2')
const Logger = require('./logger')

// then we extentiate a Person and called the greeting method on it 
const person1 = new PersonnClass('Saiyann', 40)
person1.greeting();

const instenceOfLogger = new Logger();

instenceOfLogger.on('message', function theLoggerClassCallback(data) {
    console.log(`these are the data response from the listenner/Logger class:`, data)
});

instenceOfLogger.log(`je retrouve mon 1er message ici, Quand j'emmit/triger avec le .log('message') la classe Logger contenat l'emitter`)
// instenceOfLogger.log(`je retrouve mon 2eme message ici, Quand j'emmit/triger avec le .log('message') la classe Logger contenat l'emitter`)
// instenceOfLogger.log(`je retrouve mon 3eme message ici, Quand j'emmit/triger avec le .log('message') la classe Logger contenat l'emitter`)




// ---------------------------------------
// // works with Personn.js
// ---------------------------------------

// const whoIsThisGuy = require('./personn')
// // const name can be called as i wish / require('path to the file where is the module')
// console.log(whoIsThisGuy);
// console.log(whoIsThisGuy.nicktName);