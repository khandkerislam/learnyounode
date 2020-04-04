#!/usr/bin/env node

"use strict";

var path = require("path");
var fs = require("fs");

var getStdin = require("get-stdin");
var minimist = require("minimist");

var args = minimist(process.argv.slice(2),{
    boolean: ["help","in",],
    string: ["file",],
});

const BASEPATH =
    path.resolve(process.env.BASEPATH || __dirname);

if (args.help || process.argv.length <=2 ) {
    error(null, /*showHelp=*/true);
}
else if(args._.includes("-") || args.in) {
    getStdin().then(processFile).catch(error);
}
else if(args.file){
    let filePath = path.join(BASEPATH, args.file);
    fs.readFile(filePath, function(err, contents){
        if(err) error(err.toString());
        else processFile(contents.toString());
    });
}

function processFile(filepath){
    var contents = fs.readFileSync(filepath);
    console.log(contents);
}

function error(msg, includeHelp = false) {
    console.log(msg);
    if (includeHelp) {
        console.log("");
        printHelp();
    }
}

function printHelp() {
    console.log(" ex1.js --help")
}

console.log(process.argv[2]);