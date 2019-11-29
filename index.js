const path = require("path")
const fs= require("fs")
const fetch = require("node-fetch")
 
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
    },
 

    readingfile: function(file) {
        return new Promise((resolve, reject)=>{
            fs.readFile(file, 'utf8',((err, text)=>{
                if(err) {
                    reject(err)
                    return 
                }
            const searchExpression= /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
            const urlArray=text.match(searchExpression);
            console.log(urlArray);
            resolve(urlArray)
          })) 
        })    
    },

//valida los links
   checkStatusLink: function(links){
        return new Promise ((resolve, reject)=>{
            let propitiesLink= [];
            for ( let i=0; i<links.length; i++){
                //console.log(links[i]);
                let infoLink= fetch(links[i]).then((res)=>{
                                return { 
                                    "href": links[i],
                                    "status": res.status
                                    }
                                });
                propitiesLink.push(infoLink)
                }
             resolve(Promise.all(propitiesLink))
        }) 
     }
}


    




