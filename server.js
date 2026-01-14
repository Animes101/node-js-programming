
// //local module
// import add from './local.js';
// import add2 from './local2.js';
// console.log(add2())
// console.log(add(50,60))


// //built in module

// import path from 'path'


// console.log(path.dirname('D:/animes barman/B-10/node js programming/server.js'))
// console.log(path.extname('D:/animes barman/B-10/node js programming/server.js'))
// console.log(path.basename('D:/animes barman/B-10/node js programming/server.js'))


// // import os from 'os'

// // console.log(os.freemem())
// // console.log(os.totalmem())
// // console.log(os.version())

// import fs from 'fs';


// const redDAta=fs.readFileSync('text.txt','utf-8');

// console.log(redDAta)


// fs.writeFileSync('text.txt','this is me animesh barman .i am from local module')

// console.log(redDAta)




//enent driven archiecture


// import EventEmitter from 'events';

// const event=new EventEmitter();

// event.on('sayMyName', ()=>{

//     console.log('my name is animes barman')
// })

// event.on('proffession', ()=>

//     console.log('i am a programmer')
// );


// event.emit('sayMyName')
// event.emit('proffession')


// //streaming and buffering



//create a server


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/red' && req.method === 'GET') {

        const readableStream = fs.createReadStream(__dirname + '/text.txt', 'utf8');

        res.writeHead(200, { 'Content-Type': 'text/plain' });

        readableStream.on('data', (chunk) => {
            res.write(chunk);
        });

        readableStream.on('end', () => {
            res.end();
        });

        readableStream.on('error', (err) => {
            res.writeHead(500);
            res.end('File reading error');
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route Not Found');
    }

});

server.listen(5000, () => {
    console.log('server is running on port 5000');
});
