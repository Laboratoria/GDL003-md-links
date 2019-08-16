
const mdLinks= require ('./index.js')
// checking file extension
let archive= process.argv;
let file= archive[2]
let funcMd = mdLinks(file)
console.log(funcMd);

