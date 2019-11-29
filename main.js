const mdLinks= require ('./index.js')
const path= require("path")

//read directory 
let directory=path.dirname(process.argv[2]+ "\\x");
console.log(process.argv[2]);
mdLinks.directoryContent(directory)
    .then((files)=>{
        for (i=0; i<files.length; i++){
            // checking file extension .md
            if((mdLinks.extencion(files[i]))){
                console.log("archivos merckdown encntrados "+ " " + files[i]);
                //read links on the file
                mdLinks.readingfile(files[i])
                .then((urlArray)=>{
                    console.log("total de links: " + " " + urlArray.length );
                    mdLinks.checkStatusLink(urlArray)
                    .then((propitiesLink)=>{
                        console.log(propitiesLink);
                        
                    })
                })
            }
        }
    })                         
    .catch(function (error) {
         console.log(error.message);
    });
//

