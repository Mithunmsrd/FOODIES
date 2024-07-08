const express = require('express');
const app = express();
const path = path();
const html = require('html');
const collection = require('./user_mongoose');
const publicPath = path.join(__dirname,"../model/public")
app.set("viewengine","html")
app.set("views",public)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("user_login")
})

app.get("/user_register",(req,res)=>{
    res.render("user_register")
})

app.post("/user_login",async(req,res)=>{
    try{
        const check = await collection.findOne({name:req.body.name})
          
    if(check.password===req.body.password){
        res.render("home")
    } 
    else{
        res.send("wrong password")
    } 
}
    catch{
        res.send("wrong details")
    }    
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})