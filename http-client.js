const http = require('http');
const fs = require('fs');

const url = process.argv[2];
http.get(url,(res) => {
    res.setEncoding('utf8')
    res.on('data',(data)=>{
        process.stdout.write(data +'\n');
    })
});
