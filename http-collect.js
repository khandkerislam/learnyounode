const http = require('http');
const url = process.argv[2];

http.get(url,(res)=>{
    const {statusCode} = res;
    res.setEncoding('utf8');
    let rawData = statusCode;
    res.on('data',(chunk) => { rawData += chunk;});
    res.on('end', () => {
        try {
            console.log(rawData);
        } catch(e){
            console.error(e.message);
        }
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
})