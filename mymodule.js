const fs = require("fs");
const path = require("path");

function filePrinter(dir,ext,callback){
    fs.readdir(dir, (err,res)=>{
        if(err){
            return callback(err);
        }
        if(ext[0] == '.') ext = ext.slice(1);
        const data = res.filter(value =>{
            const check = path.join(dir,value);
            if(path.extname(check).slice(1) == ext){
                return value;
            }
        })
        return callback(null,data);
    });
}

module.exports = filePrinter;
