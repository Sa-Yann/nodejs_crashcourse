// ---------------------------------------
// // works with Personn2.js
// ---------------------------------------


// ---------------------------------------
// Tried nPerson is != de PersonClass
// Wrong result we only get a table where the constructor innfo but the link to the fucntion is not working
// ---------------------------------------

const Person = require('./personn2')

const person1 = new Person('Saiyann', 40)
person1.greeting();

// ---------------------------------------------------------------------------------------------------
// good result the same class name is used is both the file required and the the file that is requiring
// ------------------------------------------------------------------------------------------------------

const PersonnClass = require('./personn2')

// then we extentiate a Person and called the greeting method on it 
const person1 = new PersonnClass('Saiyann', 40)
person1.greeting();






// ---------------------------------------
// // works with Personn.js
// ---------------------------------------

// const whoIsThisGuy = require('./personn')
// // const name can be called as i wish / require('path to the file where is the module')
// console.log(whoIsThisGuy);
// console.log(whoIsThisGuy.nicktName);