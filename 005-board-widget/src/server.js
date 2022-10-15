require('dotenv').config();
const express = require("express");
const app = express;
const port = process.env.PORT;

app.get("/",(req, res) => {
    res.send("starter page");
});

app.listen(port, () => console.log(`Servering on ${port}`));