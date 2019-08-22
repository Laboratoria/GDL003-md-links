const path = require("path")
const fs= require("fs")

module.exports = {
    extencion: function (filePath) { 
        if (path.extname(filePath)=== ".md"){
            console.log(path.extname(filePath));
            return true;
        }
        else{
        return false;
        }
        },

    directoryContent: function(directory){
     fs.readdir( directory , 'utf8',((err, files)=>{
        if(err) throw err;
        console.log(files);

     }))
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



