require('dotenv').config();

const connectDB = require('./db/connect');
const express = require('express');
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error.handler');
const app = express();
const port = process.env.PORT;

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks',tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

app.get("/",(req, res) => {
    res.send("starter page");
})
app.get("/hi",(req, res) => {
    res.send("yo !");
})

const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI);
       app.listen(port, () => console.log(`Servering on ${port}`));
    }catch (error){
        console.log(error);
    }
}

start();

//old
// app.listen(port, () =>{
//     console.log(`Servering on ${port}`);
// })