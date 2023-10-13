const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3001;

app.use(cors);
app.use(express.json);


const db = mysql.createConnection({
  host: 'localhost',     // Replace with your MySQL host
  user: 'root',     // Replace with your MySQL username
  password: 'karthik@2003', // Replace with your MySQL password
  database: 'password-manager', // Replace with your MySQL database name
});

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