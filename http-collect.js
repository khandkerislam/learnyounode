const http = require('http');
const url = process.argv[2];

http.get(url,(res)=>{
    const {statusCode} = res;
    let error;
    if(statusCode !== 200){
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
    } 
    if(error){
        console.error(error.message);
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('event',(chunk) => { rawData += chunk;});
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