const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path')

// uuid generates randon id 
// several version thats why here uuid.v4()
// test
// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());

let createdFile = 'createdFileFromLoggerListenner.txt'

class Logger extends EventEmitter {
    log(msg) {
        // this.emit('message', { id: uuid.v4(), msg: msg }) s'écrie
        this.emit('message', { id: uuid.v4(), msg })
        let createdFile = 'createdFileFromLoggerListenner.txt'
        let folderWhereToCreateTheNewFile = 'testListenner'
        console.log(createdFile);
        console.log(folderWhereToCreateTheNewFile);

        fs.mkdir(path.join(__dirname, 'testListenner'), {}, (err) => {
            if (err) throw err
            let reffolder = path.basename(__dirname)
            console.log(`le dossier testListenner à bien été créer dans le dossier ${reffolder}`)
        })

        fs.writeFile(path.join(__dirname, folderWhereToCreateTheNewFile, createdFile),
            // je met dans le doc createdFileFromLoggerListenner.txt 
            // le message qui a été envoyé lors du log de l instence instenceLogger dans le fichier index.js
            msg,
            function clbck(err) {
                if (err) throw err
                console.log(`the file: ${createdFile} as well been genrated in the folder ${folderWhereToCreateTheNewFile}`)

            })
    };

    // createFileWithMsgInIt(msg) {
    //     let createdFile = 'createdFileFromLoggerListenner.txt'
    //     let folderWhereToCreateTheNewFile = 'testListenner'

    //     fs.writeFile(path.join(__dirname, folderWhereToCreateTheNewFile, createdFile),
    //         msg,
    //         function clbck(err) {
    //             if (err) throw err
    //             console.log(`the file: ${createdFile} as well been genrated in the folder ${folderWhereToCreateTheNewFile}`)

    //         })
    // };
    // createFileWithMsgInIt();
}

module.exports = Logger;

// Logger.on() { () => console.log(`you are connected`) }