require('dotenv').config();
const {fieldValue} = require("firebase-admin/firestore");
const express = require("express");
const app = express;
const port = process.env.PORT;
const {db} = require("./firebase.config");
const {friends} = require("./model/friendsList");

app.use(express.json());

app.get("/",(req, res) => {
    res.send("starter page");
});

app.post('/add', (req, res) => {
    const {name, status} = req.body;

})

app.listen(port, () => console.log(`Servering on ${port}`));