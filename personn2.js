// With node.js The class is wrapped into 
// (function(exports, require, module, __dirname, __filename)){
//     class PersonnClass{
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         };

//         greeting() {
//             console.log(`my name is ${this.name} and I am ${this.age} years old`)
//         };
//     }
// }


class PersonnClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    greeting() {
        console.log(`my name is ${this.name} and I am ${this.age} years old`)
    };
};


// console.log(__dirname)
// gives back in Terminal the path from the folder where the index.js file is: 
// /Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse
// ------------------------------------------
// console.log(__filename)
// gives back in Terminal the path from the folder where the index.js file is: 
// with it s name at the end
// /Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/personn2.js
// ------------------------------------------
// console.log(exports)
// gives back in terminal : 
// {}
// ------------------------------------------
// console.log(require)
// gives back in terminal : 
// [Function: require] {
//     resolve: [Function: resolve] { paths: [Function: paths] },
//     main: Module {
//         id: '.',
//             path: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse',
//                 exports: { },
//         parent: null,
//             filename: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/index.js',
//                 loaded: false,
//                     children: [[Module]],
//                         paths: [
//                             '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/node_modules',
//                             '/Users/Wyan/Documents/TraversyMedia/node_modules',
//                             '/Users/Wyan/Documents/node_modules',
//                             '/Users/Wyan/node_modules',
//                             '/Users/node_modules',
//                             '/node_modules'
//                         ]
//     },
//     extensions: [Object: null prototype] {
//         '.js': [Function(anonymous)],
//             '.json': [Function(anonymous)],
//                 '.node': [Function(anonymous)]
//     },
//     cache: [Object: null prototype] {
//         '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/index.js': Module {
//             id: '.',
//                 path: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse',
//                     exports: { },
//             parent: null,
//                 filename: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/index.js',
//                     loaded: false,
//                         children: [Array],
//                             paths: [Array]
//         },
//         '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/personn2.js': Module {
//             id: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/personn2.js',
//                 path: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse',
//                     exports: { },
//             parent: [Module],
//                 filename: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/personn2.js',
//                     loaded: false,
//                         children: [],
//                             paths: [Array]
//         }
//     }
// };
// ------------------------------------------
// console.log(module)
// gives back in terminal : 
// [Function: require] {
//     resolve: [Function: resolve] { paths: [Function: paths] },
//     main: Module {
//         id: '.',
//             path: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse',
//                 exports: { },
//         parent: null,
//             filename: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/index.js',
//                 loaded: false,
//                     children: [[Module]],
//                         paths: [
//                             '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/node_modules',
//                             '/Users/Wyan/Documents/TraversyMedia/node_modules',
//                             '/Users/Wyan/Documents/node_modules',
//                             '/Users/Wyan/node_modules',
//                             '/Users/node_modules',
//                             '/node_modules'
//                         ]
//     },
//     extensions: [Object: null prototype] {
//         '.js': [Function(anonymous)],
//             '.json': [Function(anonymous)],
//                 '.node': [Function(anonymous)]
//     },
//     cache: [Object: null prototype] {
//         '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/index.js': Module {
//             id: '.',
//                 path: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse',
//                     exports: { },
//             parent: null,
//                 filename: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/index.js',
//                     loaded: false,
//                         children: [Array],
//                             paths: [Array]
//         },
//         '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/personn2.js': Module {
//             id: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/personn2.js',
//                 path: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse',
//                     exports: { },
//             parent: [Module],
//                 filename: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/personn2.js',
//                     loaded: false,
//                         children: [],
//                             paths: [Array]
//         }
//     }
// }
// my name is Saiyann and I am 40 years old
// yanns - macbook - pro: nodejs_crashcourse Wyan$ node index
//     < ref * 1 > Module {
//     id: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/personn2.js',
//         path: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse',
//             exports: { },
//     parent: Module {
//         id: '.',
//             path: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse',
//                 exports: { },
//         parent: null,
//             filename: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/index.js',
//                 loaded: false,
//                     children: [[Circular * 1]],
//                         paths: [
//                             '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/node_modules',
//                             '/Users/Wyan/Documents/TraversyMedia/node_modules',
//                             '/Users/Wyan/Documents/node_modules',
//                             '/Users/Wyan/node_modules',
//                             '/Users/node_modules',
//                             '/node_modules'
//                         ]
//     },
//     filename: '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/personn2.js',
//         loaded: false,
//             children: [],
//                 paths: [
//                     '/Users/Wyan/Documents/TraversyMedia/nodejs_crashcourse/node_modules',
//                     '/Users/Wyan/Documents/TraversyMedia/node_modules',
//                     '/Users/Wyan/Documents/node_modules',
//                     '/Users/Wyan/node_modules',
//                     '/Users/node_modules',
//                     '/node_modules'
//                 ]
// };
// ------------------------------------------



module.exports = PersonnClass