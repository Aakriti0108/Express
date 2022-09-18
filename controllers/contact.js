const rootDir =require ('../util/path')
const path = require ('path')

exports.getcontrroller=(req,res,next)=>{
    //console.log("In the 2nd Middleware!");
    // res.sendFile(path.join(__dirname,'../','views','addproduct.html'))
    res.sendFile(path.join(rootDir , 'views','contact.html'))
    //res.send('<form action="/admin/addproduct" method="POST"><input type=text name="title"><input type=number name="number"><button type ="submit">Add Product</button></form> ')
}

exports.postcontroller=(req,res,next)=>{
    console.log(req.body);
    res.send('form submitted')
   
}