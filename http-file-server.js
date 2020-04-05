const http = require('http');
const fs = require('fs');
const port = Number(process.argv[2]);

http.createServer((req, res) =>{
    const text = fs.createReadStream(process.argv[3]);
    text.on('open', ()=>{
        text.pipe(res);
    })
    text.on('error',(err)=>{
        res.end(err);
    })
}).listen(port);
