const http = require('http');
const url = process.argv[2];
let rawData = '';

http.get(url,(res)=>{
    res.on('data',(chunk) => { rawData += chunk;});
    res.on('end', () => {
        console.log(rawData.length);
        console.log(rawData);
    });
});