const fs = require('fs');

(function lol(){
    fs.readFile(process.argv[2],(err,element)=>{
        const lines = element.toString().split('\n').length-1;
        console.log(lines);
    })
})();