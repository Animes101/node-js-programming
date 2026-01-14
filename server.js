
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

const server = http.createServer((req, res) => {
    console.log('request has been made from browser to server');

    res.writeHead(200, { 'Content-Type': 'application/json' });

    const data = {
        name: 'animesh',
        profession: 'programmer'
    };

    res.write(JSON.stringify(data));
    res.end();
});

server.listen(5000, () => {
    console.log('server is running on port 5000');
});
