const path = require('path');

const readFiles = require('./mymodule');
const args = process.argv.slice(2);
const dir = path.resolve(args[0]);
const ext = args[1];

readFiles(dir,ext,function callback (err,data){
    if(err){
        console.log(err);
        return;
    }
    data.forEach(element => {
        console.log(element);
    });

})
