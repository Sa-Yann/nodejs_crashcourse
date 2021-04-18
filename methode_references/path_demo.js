//  path is  core module(integrated within node so we just need to require the methode name 
// in betwenn '...' in the require)
const { dirname } = require('path');
const path = require('path');

// -----------------------------------
// path.basename(path[, ext])
// -----------------------------------

const fileName = __filename

console.log(fileName);
// render the filename path in Terminal
console.log(path.basename(__filename));
// render just the name of the file : path_demo.js
console.log(path.basename(__filename, 'js'))
// render just the name of the file minus what is in coma as second argument  : path_demo.
console.log(path.basename(__filename, '.js'))
// render : path_demo
console.log(path.basename(__filename, 'o.js'))
// render : path_dem

// in the same wau to jsut get the folder where a file is located 
// we will use the __dirname as argument
console.log(path.basename(__dirname))
// render methode_references in the terminal

// -----------------------------------
// path.parse(path)
// retun an object (table) with dir , root , base , name  & ext as string 
// -----------------------------------

console.log(path.parse(__filename))
// return :
// {
//     root: '/',
//         dir: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/methode_references',
//             base: 'path_demo.js',
//                 ext: '.js',
//                     name: 'path_demo'
// }

console.log(path.parse(__filename).ext)
// return just the name of teh extension of the file

// -----------------------------------
// path.join(path)
// returns a path with the folder a second argument 
// and teh name of the file where is the folder as third argument
// -----------------------------------

const newPathFile = `test/hello_test.html`
console.log(path.join(__dirname, `${newPathFile}`))
// it will allow us to create a new folder with a new file






