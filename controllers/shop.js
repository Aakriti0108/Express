const rootDir =require ('../util/path')
const path = require ('path')

exports.getshop=(req,res,next)=>{
    //console.log("In the Middleware!")
    //res.send('<h1>welcome home</h1>')
   // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.sendFile(path.join(rootDir,'views','shop.html'))
    
}