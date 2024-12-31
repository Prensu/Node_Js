const http = require('http');
const fs = require('fs');
const _ =require('lodash');

const server = http.createServer((req, res) => {

  //lodash
    const num=_.random(0,20);
    console.log(num);

    const greet=_.once(() =>{
        console.log("Fuck");
    });

    greet();
    greet();


    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) { 
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            return;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Read and serve the requested file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('<h1>Server Error</h1>');
        } else {
            res.end(data);
        }
    });
});

server.listen(4000, 'localhost', () => {
    console.log('Server is listening on port 4000');
});
