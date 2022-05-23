require('dotenv').config();
require('express-async-errors');

const connectDB = require('./db/connect');
const router = require('./routes/products');
const notFoundMiddleware = require('./middleware/not-found');
const errordMiddleware = require('./middleware/error-handler');
const express = require('express');

const app = express();
const port = process.env.PORT || 8084;

//middleware
app.use(express.json());

//routes
app.get('/', (req,res) => {
    res.send('<h2>Store API</h2><br><a href="/api/v1/products">products route</a>');
}); //for testing

app.use('/api/v1/products',router)

//products route

app.use(notFoundMiddleware);
app.use(errordMiddleware);

const start = async () => {
    try {
        //connect db
        await connectDB(process.env.DB_MONGO_URI);
        app.listen(port, () => console.log(`Servering on ${port}`));
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}

start();