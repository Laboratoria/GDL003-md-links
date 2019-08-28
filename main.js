const mdLinks= require ('./index.js')
const path= require("path")

// checking file extension
//mdLinks.extencion(file)

let directory=path.dirname(process.argv[2]) ;
console.log(directory);
mdLinks.readingfile(process.argv[2]);

/*mdLinks.directoryContent(directory, (file)=>{
// console.log("El contenido de tu directorio es: "+ file);
for(i=0; i<file.length; i++)
 {
    if((mdLinks.extencion(file[i]))){
        console.log(file[i]);
    }
 }
});
*/



