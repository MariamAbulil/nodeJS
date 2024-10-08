
//module from loggr.js 
/* const logger=require('./logger');
logger.log('mss');
logger.url='htttp'
console.log(logger); */


//path module
const path=require("path");
var pathOj=path.parse(__filename);
console.log(pathOj)

//os module
const os=require('os');
var totalmem=os.totalmem();
var freemem=os.freemem();
console.log(`totalmem = ${totalmem}`);
console.log(`freemem = ${freemem}`);


//file system module
const fs=require('fs')
fs.readdir('./',function(err,files){
    if(err) console.log('error'+err)
        else console.log('result',files)
})

const files=fs.readdirSync('./')
console.log(files)


//event :signle that sth has happned 
const EventEmitter=require('events');
const emitter=new EventEmitter();
//lisenter
emitter.on('loadLogger',function(arg){
    console.log('lisenter is called',arg); 
})

emitter.emit('loadLogger',{id:1,url:'http://...'})//put the event arg =={id:1,url:'http://...'}



//http module 
const http=require('http');

const server=http.createServer();
server.on('connection',Socket=>{
console.log(' new connection ...')          //when I write localhost:3000 in brower ,
                                       //then the consle return the new connection ...
})
console.log('listning on port 3000....')
server.listen(3000);


//http module diff from above 
const http1=require('http')


const server1=http1.createServer((req,res)=>{
    if(req.url==='/'){   //http://localhost:5000/ then the inside the document is hello world :)
        res.write('hello world');
        res.end();
    }
    if(req.url==='/mariam'){   //http://localhost:5000/mariam  then the array is inside the document 
        res.write(JSON.stringify([1,2,3,]));
        res.end()
    }
})
console.log('Lisenting on port 5000...')
server1.listen(5000)





