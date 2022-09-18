const express = require ('express');
const router =express.Router();
const admincontroller =require ('../controllers/admin');
//admin/add-product => GET
 
router.get('/addproduct',admincontroller.getcontroller );

// admin/add-product =>POST
router.post('/addproduct',admincontroller.postcontroller );

module.exports=router;

