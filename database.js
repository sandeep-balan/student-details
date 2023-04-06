const mysql = require("mysql");

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123123123",
    database:"student_details"
});
conn.connect((err)=>{
    if(err) throw err;
    else{
        console.log("DB connected successfully");
    }
})
module.exports = conn;