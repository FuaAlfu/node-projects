const express = require('express');
const router = express.Router();

//for testing
const items = [
    {id: "1", task: "buy good stuff", complated: false}
];

router.get('/',(req,res) => {
    res.json({
        items,
    });
});

module.exports = router;