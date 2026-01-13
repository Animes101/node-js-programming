
//local module
import add from './local.js';
import add2 from './local2.js';
console.log(add2())
console.log(add(50,60))


//built in module

import path from 'path'


console.log(path.dirname('D:/animes barman/B-10/node js programming/server.js'))
console.log(path.extname('D:/animes barman/B-10/node js programming/server.js'))
console.log(path.basename('D:/animes barman/B-10/node js programming/server.js'))


// import os from 'os'

// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.version())

import fs from 'fs';


const redDAta=fs.readFileSync('text.txt','utf-8');

console.log(redDAta)


fs.writeFileSync('text.txt','this is me animesh barman .i am from local module')

console.log(redDAta)


