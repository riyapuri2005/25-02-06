const express = require("express");
const app = express();

app.get("/signup", (req, res) => {
    res.sendFile("./signup.html");
})

app.post("/signup", (req, res) => {
    let{username, useremail, userpassword} = req.body;
    console.log(username, useremail, userpassword);
})

app.listen(3434,()=>{
    console.log("Server started");
})