const fs = require('fs')
const path = require('path')

// ------------------------------------------------------
// How to create  a folder on our server with node.js
// ------------------------------------------------------

// Needd to be commented tyo avoid error in the console cause directory already exists
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err
//     let dossierDereference = path.basename(__dirname)
//     console.log(`le dossier test a bien été créer dans le dossier ${dossierDereference}`)
// })

// fs.mkdir(path.join(__dirname, 'test2'), {}, (err) => {
//     if (err) throw err
//     let reffolder = path.basename(__dirname)
//     console.log(`le dossier test2 à bien été créer dans le dossier ${reffolder}`)
// })

//// ------------------------------------------------------
//  CXreate and write to a file
// ------------------------------------------------------
let createdFile = 'createdFile.txt'
let folderWhereToCreateTheNewFile = 'test'

// fs.writeFile(path.join(__dirname, folderWhereToCreateTheNewFile, createdFile), `Here is the content that I wonna write in the option ()`, function clbck(err) {
//     if (err) throw err
//     console.log(`the file: ${createdFile} as well been genrated in the folder ${folderWhereToCreateTheNewFile}`)
//     //// ------------------------------------------------------
//     //  add new content in the file following th eprevious one with fs.append
//     // it s in the callback from the fs.write() to make sure we wait the firsttask is done to do the fs.appen
//     // ------------------------------------------------------
//     let folderAlreadyExisting = folderWhereToCreateTheNewFile
//     let existingFile = createdFile
//     fs.appendFile(path.join(__dirname, folderAlreadyExisting, existingFile), (`And here is somme text that is added via fs.appened to the already existing text`), (err) => {
//         if (err) throw err
//         console.log(`Go check the file ${existingFile} in the folder ${folderAlreadyExisting} to see the full text printed there`)
//     })
// })

//// ------------------------------------------------------
//  read an existing  file 
// ------------------------------------------------------

// fs.readFile(path.join(__dirname, folderWhereToCreateTheNewFile, createdFile), 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(`check the content of the file : ${createdFile} is in the terminal`)
//     console.log(data)
// })

//// ------------------------------------------------------
//  rename an existing  file 
// ------------------------------------------------------

let newFileName = 'newCreatedFile.txt'
fs.rename(
    path.join(__dirname, folderWhereToCreateTheNewFile, createdFile),
    path.join(__dirname, folderWhereToCreateTheNewFile, newFileName),
    (err) => {
        if (err) throw err
        console.log(` ${createdFile} s'appelle mainetnant ${newFileName}`)
    })


