// Emitts event means some function respond to to an action
// we can create an devntEmitter class 
// and then we can emitt events and have listeners
// that react when triggered

// Metaphore: you try to push somebody , he emmits the function pushback to not fall

const EventEmitter = require('events')
const Logger = require('../methode_references/event_demo')

class MyEmitter extends EventEmitter { }

// init/create an object/instence 
const instenceMyEmitter = new MyEmitter()

// Event Listener
instenceMyEmitter.on('eventToTriger', () => console.log('Event as been trigererd and fire back the console.log()'))

// from now on, everytime eventToTriger is Tirigered with for exemple the .emit() methode 
// it fire the callback function , here the console.log()
console.log(`emit 1 time get : `)
instenceMyEmitter.emit('eventToTriger');
console.log(`emit 2 times get : `)
instenceMyEmitter.emit('eventToTriger');
instenceMyEmitter.emit('eventToTriger');
console.log(`emit 3 times get : `)
instenceMyEmitter.emit('eventToTriger');
instenceMyEmitter.emit('eventToTriger');
instenceMyEmitter.emit('eventToTriger');