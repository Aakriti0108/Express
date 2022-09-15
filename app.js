const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("In the Middleware!")
    next();
})

app.use((req,res,next)=>{
    console.log("In the 2nd Middleware!");
    res.send('<h1>WELCOME TO EXPRESS</h1>')
})

app.listen(3000);
