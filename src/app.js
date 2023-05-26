const express= require('express')
const app= express();
let port=3000;

const path=require('path');
app.use(express.static(__dirname +'../template/views'));
const Registers =require('../src/model/model');
// const { ppid } = require('process');
const logins =require('../src/model/model2');

const template_path = path.join(__dirname,'../template/views');
app.set('view engine','hbs');
// app.set("view engine","html");
app.set('views',template_path);
app.use(express.urlencoded({extended:false}));
app.use(express.static(template_path)); 
// app.engine('html',mustacheExpress());

// app.set('views',__dirname,'../template/views')

require('./db/db');
require('./db/db2');
app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/register', async (req,res)=>{
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if (password === cpassword) {
            const registerEmployee = new Registers({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword,
            });


          const registered =  await registerEmployee.save();
          res.send(registered);
          res.send(201).render("index")

        } else {
            res.send('passwords do not match');
        }
      
    } catch (error) {
        console.log("c");
        res.send(error);
    }
})


app.post('/login', async (req,res)=>{
    try{
            const loginEmployee = new logins({
                email: req.body.email,
                password: req.body.password,
                });

          const login =  await loginEmployee.save();
          res.send(login);
          res.send(201).render('index')
          

        } catch (error ) {
            if(err.email.includes('already exists'));
            }

})

app.listen(port,()=>{
    console.log(`listing to the port ${port} `)
});
