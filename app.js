const express = require('express');
const app = express();

// app.use(express.static(path.join,(__dirname,'public')));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'user  login.html'));          
//     })

// app.get('/hi',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','user register.html'));
// })

// app.get('/hello',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','admin login.html'))
// })

// app.get('/*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','admin register.html'))
// })



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})