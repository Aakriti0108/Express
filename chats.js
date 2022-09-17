const express = require ('express');
const chat = express();
const fs = require('fs');
const bodyParser = require("body-parser")

chat.use(bodyParser.urlencoded());


chat.get('/' , (req,res)=>{
    fs.readFile('username.txt',(err,data)=>{
      if(err)
      {
        console.log(err);
        data ='no chats';
      }
      res.send(
        `${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
        >
        <input type="text" name="message" id="message" placeholder="message"> 
        <input type="hidden" name ="username" id="username" >
        <br>
        <button type="submit">add</button></form>`);
    })
   
})

chat.post("/",(req,res)=>
{
  if(req.body.message == '')
  {
    skip;
  }
  fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`,{flag :'a' },(err)=>
       err ? console.log(err) : res.redirect("/")
    )
    console.log(req.body.username);
    console.log(req.body.message);
    
})


chat.get('/login' , (req,res)=>{
    //console.log('userdetails');
    res.send(
      `<form onSubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST">

      <input id="username" type="text" name"username" placeholder="username">
     <br>
      <button type="submit">Login</button>
  
  </form>`);
  
})

chat.listen(3000)