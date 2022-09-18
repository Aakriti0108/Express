const express = require ('express');
const router =express.Router();
const contactController = require ('../controllers/contact');
//admin/add-product => GET
 
router.get('/contact', contactController.getcontrroller)

// admin/add-product =>POST
router.post('/success',contactController.postcontroller)


module.exports=router