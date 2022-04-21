const mongoose = require('mongoose');
const myDB = process.env.MY_DATA;

mongoose.connect(myDB)
        .then(() => console.log('Connected to the db...'))
        .catch((err) => console.log(err));

// module.exports = {
//     myDB
// }