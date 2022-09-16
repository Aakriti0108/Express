const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
//app.use(bodyParser.urlencoded({extended : false}));


app.use('/addproduct',  (req,res,next)=>{
    console.log("In the 2nd Middleware!");
    res.send('<form action="/product" method="POST"><input type=text name="title"><input type=number name="number"><button type ="submit">Add Product</button></form> ')
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})


app.use('/',(req,res,next)=>{
    //console.log("In the Middleware!")
    res.send('<h1>welcome home</h1>')
})

//app.use((req,res,next)=>{
   // console.log("In the 2nd Middleware!");
  //  res.send('<h1>WELCOME TO EXPRESS</h1>')
//})

app.listen(3000);
