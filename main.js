const mdLinks= require ('./index.js')
const path= require("path")

//read directory 
let directory=path.dirname(process.argv[1]);


/* mdLinks.directoryContent(directory, (file)=>{
console.log("El contenido de tu directorio es: " + file  );
for(i=0; i<file.length; i++)
 {
    if((mdLinks.extencion(file[i]))){
        console.log("archivos merckdown encntrados" + file[i]);
    }
 }
});  */


mdLinks.directoryContent(directory)
    .then((files)=>{
        for (i=0; i<files.length; i++){
            // checking file extension .md
            if((mdLinks.extencion(files[i]))){
                console.log("archivos merckdown encntrados "+ " " + files[i]);
            }
        }
    })    
    .catch(function (error) {
         console.log(error.message);
    });







//mdLinks.readingfile(process.argv[2]);

