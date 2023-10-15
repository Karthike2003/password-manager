const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3001;

app.use(cors);
app.use(express.json);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'karthik@2003',
    database: 'password-manager',
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Successfully connected to the database');
  });
  
  // Now you can use the "db" connection object for your queries
  

app.post("/addpassword",(req,res)=>{
     const {password,title} = req.body

     db.query("INSERT INTO passwords (password,title) VALUES(?,?)",[
        password,
        title
     ], (err,result) => {
        if (err){
            console.log(err);
        }
        else {
            res.send("success");
        }
     })
});
app.listen(PORT,() =>{
    console.log("server is running");
});