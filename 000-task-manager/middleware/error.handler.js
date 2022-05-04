const errorHandlerMiddleware = (err,req, res, next) => {
    console.log(err); //for testing
    return res.status(err.status).json({msg:err.message});
    //return res.status(500).json({msg:err});
}

module.exports = errorHandlerMiddleware;