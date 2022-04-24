const mongoose = require('mongoose');
//const myDB = process.env.MY_DATA;

const connectDB = (url) => {
     return mongoose.connect(url)
}




//old but gold
// mongoose.connect(myDB)
//         .then(() => console.log('Connected to the db...'))
//         .catch((err) => console.log(err));

/*
const connectDB = (url) => {
     return mongoose.connect(url,{
             useNewUrlParser: true,
             useCreateIndex: true,
             useFindAndModify: false,
             useUnifiedTopology: true,
     })
}
*/

module.exports = connectDB;