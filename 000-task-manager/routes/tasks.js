const express = require('express');
const router = express.Router();

const {getAllTasks} = require('../controllers/tasks');

router.route('/').get(getAllTasks);
//old example
// router.route('/').get((req, res) => {
//     res.send("get all items");
// });


module.exports = router