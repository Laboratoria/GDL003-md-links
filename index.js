const path = require("path")
module.exports = filePath => path.extname(filePath) === ".md"     ;  

/*module.exports = (filePath) => {
    if (path.extname(filePath)=== ".md"){
        return true;
    }
    return false;
};
ternarios
   path.extname(filePath)=== ".md") ? true : false

module.exports = (filePath) => path.extname(filePath)=== ".md") ? true : false   o

module.exports = filePath => path.extname(filePath) === ".md" ? true : false      o

*/

              


