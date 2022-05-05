require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const {cors} = require('cors');
const app = express();
const route = require('./route');
const port = process.env.PORT;

app.get('/', (req,res) => {
    res.send('testing.. ');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/route',route);

app.listen(port, () => console.log(`Servering on ${port}`));