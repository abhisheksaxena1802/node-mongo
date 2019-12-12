// var log = require('./logger');
// const path = require('path');


// var pathObj = path.parse(__filename);

// console.log(pathObj);
// log('test message1');

// const EventEmitter = require('events');
// const emitter = new EventEmitter();
//     console.log('Listner called');
// emitter.on('messageLogged', function(){

// });
// emitter.emit('messageLogged');

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello user');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(2000);

console.log('Listening on port 2000..');