const mdLinks= require ('./index.js')
const path= require("path")

// checking file extension
let archive= process.argv;
console.log(archive);
let file= archive[2];
//mdLinks.extencion(file)
let directory=path.dirname(file) ;
//console.log(directory);
mdLinks.directoryContent(directory)
//mdLinks.readingfile(file);

