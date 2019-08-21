const mdLinks= require ('./index.js')

// checking file extension
let archive= process.argv;
let directory= process.cwd();
//let file= archive[2]
console.log(directory);

//mdLinks.extencion(file)
mdLinks.directoryContent(directory)


