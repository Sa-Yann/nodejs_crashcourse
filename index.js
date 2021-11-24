const http = require('http');
const path = require('path');
const fs = require('fs');
const { ENOENT } = require('constants');



const server = http.createServer((req,res) => {
    // // server principle 1 : Not efficient but explanitory
    // // console.log(req.url); 
    // if(req.url === '/') {
    //     console.log("🚀 ~ file: index.js ~ line 10 ~ server ~ req.url", req.url)
    //     // we want to laod the html home page/index.html page when localhost: 5000 is requested
    //     // we want the req.url = / to be associater to the the path to reach th eindex.html file from the root of our machine/computer where the server is located
    //     fs.readFile(
    //         // path.join(__dirname, 'public', 'index.html') => /Users/Eyesbreakers/Documents/TraversyMedia/nodejs_crashcourse/public/index.html
    //         path.join(__dirname, 'public', 'index.html'), 'utf-8', ((err, content) => {
    //             console.log("🚀 ~ file: index.js ~ line 13 ~ path.join ~ __dirname", __dirname) 
    //             //__dirname is the complete path to the root folder on the machin ur workin 
    //             //in our case /Users/Eyesbreakers/Documents/TraversyMedia/nodejs_crashcourse
    //             if(err) throw err;
    //             res.writeHead(200, {'content-type': 'text/html'});
    //             res.end(content); // serving the html page
    //     }))
    //     // res.writeHead(200, {'content-type': 'text/html'});
    //     // res.end(`<h3>html h3 tag with text sent as response from the request localhost:5000</h3>`);
    // }
    // if(req.url === '/about') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'), 'utf-8', (err, content) => {
    //         if(err) throw err
    //         res.writeHead(200, {'Content-Type':'text/html'});
    //         res.end(content);
    //     })
    // }
    // // case wher we qould fetch j.son data from a REST-API
    // // const users = [
    // //     {firstName: John , lastName: Doe},
    // //     {firstName: Yann , lastName: Leblond}
    // // ];
    // if(req.url === '/api/users'){
    //     console.log("🚀 ~ file: index.js ~ line 40 ~ server ~ req.url", req.url);
    //     const users = [
    //         {firstName: 'John' , lastName: 'Doe'},
    //         {firstName: 'Yann' , lastName: 'Leblond'}
    //     ];
    //     res.writeHead(200, {'content-type':'apllication.json'});
    //     res.end(JSON.stringify(users));
    // };



    // server principle 2 : Efficient 
    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // // test filePath output
    // console.log(filePath);
    // we also want to set up the content type deoending on the file type sent as response
    // check extension file name that is being sent as response
    let extName = path.extname(filePath)
    // // console.log(extName);
    // // res.end();
    // create a default content type variable
    let contentType = 'text/html'
    // use switch to affect a content type to the res.writeHead response depending on the file type sent
    switch(extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'aplication/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    // we wonna read the file content we re sending that gonna be serve either to the browser as html/png/jpg or as a;i answer as json file
    fs.readFile(filePath, (err,content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // file/page not found on server
                fs.readFile(path.join(__dirname, 'public', '404.html'), 'UTF-8',(err,content404) => {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.end(content404, 'UTF-8');
                })
            } else { // if the error is something else than err.code === ENOENT
                // Some Server Error
                res.writeHead(500);
                res.end(`Type of Server Error: ${err.code}`)
                // res.end('Server Error:' + err.code )
            }
        } else { // If no err while looking for reading the file
            // Success
            res.writeHead(200, {'content-type' : contentType});
            res.end(content, 'utf8')
        } 
    });
    




});

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));