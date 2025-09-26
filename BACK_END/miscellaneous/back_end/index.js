const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let {user,pass} = req.query;
    res.send("standard GET response. welcome" + " " + user);
});

app.post("/register", (req, res) => {
    let {user,pass} = req.body;
    res.send("standard POST response. welcome" + " " + user);
    console.log(pass);
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})