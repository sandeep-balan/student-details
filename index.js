const express = require("express");
const app = express();
const db = require("./database")
app.use(express.urlencoded());
app.set("views",__dirname+"/view");
app.set("view engine","ejs");
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/",(req,res)=>{
    const {fname,lname,email,dob,gender,address1,address2,city,zipcode,country} = req.body;
    var sql = "INSERT INTO details (fname,lname,email,dob,gender,address1,address2,city,zipcode,country) values (?,?,?,?,?,?,?,?,?,?)";
    db.query(sql,[fname,lname,email,dob,gender,address1,address2,city,zipcode,country],(err,data)=>{
        if(err) throw err;
        else{
            console.log(data);
            console.log("Updated Successfully");
        }
        res.redirect("/details");
    })

})
app.get("/details",(req,res)=>{
    var sql = "select * from details";
    db.query(sql,(err,data)=>{
        res.render('detail',{datum:data});
    })
})

app.listen(3000,(req,res)=>{
    console.log("Connected on port 3000 on http://localhost:3000");
})