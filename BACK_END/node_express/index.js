const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});



// app.use((req,res)=>{
//     //req
//     console.log("request received");
//     //res
//     res.send("besic responce.");  //send only one res at a time for one path
//     res.send("<h1>satndard response</h1>");
// });



// app.get("/", (req, res) => {
//     res.send(`Hello it's root.`);
// });

// app.get("/apple", (req, res) => {
//     res.send(`you conected with apple path`);
// });

// app.get("/banana", (req, res) => {
//     res.send(`you conected with banana path`);
// });

// app.use((req,res) => {
//     res.send("there is no such things like that exist!!");
// });



// app.get("/", (req, res) => {
//     res.send("Hello it's root.");
// });

// app.get("/:username/:id", (req, res) => {
//     let { username, id} = req.params;
//     res.send(`welcome to the page of @${username}`);
// });



// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("no result");
// });

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("nothing search");
    }
    res.send(`search result for query: ${q}`);
});