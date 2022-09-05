import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import {config} from './config/config';
import Logging from './library/Logging';
// import * as

const app = express();

//connect to mongo
mongoose.connect(config.mongo.url, {retryWrites: true, w: 'majority'})
// .then(() => {console.log('connected')})
.then(() => {
    Logging.info("Connected to mongoDB");
    StartServer();
})
// .catch(err => {console.log(err)})
.catch(err => {
    Logging.error('Unable to connect: ');
    Logging.error(err);
});

//start servering only if mongo connects
const StartServer = () => {
    app.use((req,res,next) => {
        Logging.info(`Incomming -> Method: [${req.method}] - url: [${req.url}] - 
        IP: [${req.socket.remoteAddress}]`);

        req.on('finish', () => {
            Logging.info(`Incomming -> Method: [${req.method}] - url: [${req.url}] -
             IP: [${req.socket.remoteAddress}] - Static: [${res.statusCode}]`);
        });
        next();
    });
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    //rules of our API
    app.use((req,res,next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS'){
            res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET'); 
            return res.status(200).json({});
        }
        next();
    });

    //routes

    //health-check
    app.get('/ping', (req,res, next) => res.status(200).json({message: 'pong'}));

    // [errors - handling]
    app.use((req,res,next) => {
        const err = new Error('Error: not found..');
        Logging.error(err);

        return res.status(404).json({message: err.message});
    });

    http.createServer(app).listen(config.servers.port,() => Logging.info(
        `Server is running on port ${config.servers.port}..`
    ))

};