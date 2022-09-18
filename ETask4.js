const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes =require('./routes/contact')
const path = require ('path')
const errorcontroller =require ('./controllers/error')
app.use(bodyParser.urlencoded());
//app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)
app.use('/contact',contactRoutes)

app.use(express.static(path.join(__dirname,'public')));

app.use('/', errorcontroller.geterror);


app.listen(3000);
