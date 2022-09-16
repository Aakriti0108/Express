const express = require ('express')
const router =express.Router();

router.get('/',(req,res,next)=>{
    //console.log("In the Middleware!")
    res.send('<h1>welcome home</h1>')
})

module.exports=router;