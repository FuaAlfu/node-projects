require('dotenv').config();

require('./db/connect');
const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const port = process.env.PORT;

//middleware
app.use(express.json());

//routes
app.use('/api/v1/tasks',tasks);

app.get("/",(req, res) => {
    res.send("starter page");
})
app.get("/hi",(req, res) => {
    res.send("yo !");
})

app.listen(port, () =>{
    console.log(`Servering on ${port}`);
})