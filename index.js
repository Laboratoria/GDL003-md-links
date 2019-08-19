const path = require("path")
module.exports = {
    extencion: function (filePath) { 
        if (path.extname(filePath)=== ".md"){
            return true;
        }
        else{
        return false;
        }
        },
    
        
    
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



