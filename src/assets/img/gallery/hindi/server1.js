const glob = require("glob");


const testFolder = "./";
const fs = require("fs");

fs.readdir(testFolder, (err, files) => {
    files.forEach((file) => {
        console.log(file); // use those file and return it as a REST API
    });
});