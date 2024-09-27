const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,"./index.html"));
})

app.get('/signup',(req,res)=>{

res.sendFile(path.join(__dirname,"/signup.html"));

})
app.post("/signup",(req,res)=>{
  const { email, pass } = req.body;
  console.log(req.body);;
  
    //res.sendFile(path.join(__dirname,"./index.html"));

    //res.sendFile(path.join(__dirname, "public", "index.html"));
  let response=(fs.readFileSync("./data.json"));
  const datas=JSON.parse(response);
  const data=datas.find(data=>data.email===email)

    if(data) {
      return res.status(400).send('User already exists');
  }
  datas.push({email,pass})

  fs.writeFileSync("./data.json",JSON.stringify(datas));

  res.redirect('/');
  
    
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"/login.html"));

    })
app.post("/login",(req,res)=>{
      //res.sendFile(path.join(__dirname,"./index.html"));
  
     // res.sendFile(path.join(__dirname, "public", "index.html"));
    //let data=JSON.parse(fs.readFileSync("./data.json",));
    
    res.redirect('/');
      
  })

app.listen(3000);