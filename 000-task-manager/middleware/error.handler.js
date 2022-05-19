const {customError} = require('../errors/custom-errors');
const errorHandlerMiddleware = (err,req, res, next) => {
    if(err instanceof customError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    //console.log(err); //for testing
   // return res.status(err.status).json({msg:err.message});
    return res.status(500).json({msg:'Failed, somthing went wrong, please try again..'});
}

module.exports = errorHandlerMiddleware;