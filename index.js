const path = require("path")
const fs= require("fs")


 
module.exports = {
    directoryContent:function (directory){
        return new Promise ((resolve, reject)=>{
                fs.readdir( directory ,((err, files)=>{
                    if (err) {
                        reject(err)
                        return 
                    }
                resolve(files)
            }))
        })
    },

    extencion: function (filePath) { 
        if (path.extname(filePath)=== ".md"){
            return true;
        }
        else{
        return false;
        }
    }
 

    

   /*  readingfile: function(file) {
        fs.readFile(file, 'utf8',((err, text)=>{
            if(err) {
                throw err;
            }
            const searchExpression= /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
            const urlArray=text.match(searchExpression);
             console.log(urlArray);
             console.log(urlArray.length);
             
            }))    
    } */
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



