const path = require("path")
const fs= require("fs")

module.exports = {

    directoryContent: function(directory, callback){
        fs.readdir( directory ,((err, files)=>{
           if(err) {
               throw err;
            }
           callback(files);
           }))
       },
    

    extencion: function (filePath) { 
        if (path.extname(filePath)=== ".md"){
            return true;
        }
        else{
        return false;
        }
    },

    

    readingfile: function(file) {
        fs.readFile(file, 'utf8',((err, text)=>{
            if(err) throw err;
            console.log(text);
            }))    
    }



    
}
    
/*module.exports = (filePath) => {
    path.extname(filePath) === ".md"     ;  
        return path.extname(filePath) ;
    
};
ternarios
   path.extname(filePath)=== ".md") ? true : false

module.exports = (filePath) => path.extname(filePath)=== ".md") ? true : false   o

module.exports = filePath => path.extname(filePath) === ".md" ? true : false      o

*/



