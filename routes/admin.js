const express = require ('express');
const router =express.Router();

//admin/add-product => GET
 
router.get('/addproduct',  (req,res,next)=>{
    console.log("In the 2nd Middleware!");
    res.send('<form action="/admin/addproduct" method="POST"><input type=text name="title"><input type=number name="number"><button type ="submit">Add Product</button></form> ')
})

// admin/add-product =>POST
router.post('/addproduct',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})


module.exports=router

