const express = require ('express')
const router =express.Router();
const path =require('path')
const rootDir = require('../util/path')
router.get('/shop',(req,res,next)=>{
    //console.log("In the Middleware!")
    //res.send('<h1>welcome home</h1>')
    res.sendFile(path.join(rootDir,'views','shop.html'))
    //res.sendFile(path.join(__dirname,'views','shop.html'))
})

module.exports=router;