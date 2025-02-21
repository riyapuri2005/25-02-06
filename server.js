const express = require("express");
const app = express();

//middleware to parse urlencoded data
express.urlencoded({ extended: true });
let userdata = []


app.get("/signup", (req, res) => {
    res.sendFile(__dirname+"/signup.html");
})

app.post("/signup", (req, res) => {
    let{username, useremail, userpassword} = req.body;
    let newUser ={
        name: username, email: useremail, password: userpassword
    }
    userdata.push(newUser);
    // console.log(username, useremail, userpassword);
})

app.listen(3434,()=>{
    console.log("Server started");
})