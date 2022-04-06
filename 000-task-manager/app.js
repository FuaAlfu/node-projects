require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

//routes
app.get("/",(req, res) => {
    res.send("starter page");
})
app.get("/hi",(req, res) => {
    res.send("yo !");
})

app.listen(port, () =>{
    console.log(`Servering on ${port}`);
})