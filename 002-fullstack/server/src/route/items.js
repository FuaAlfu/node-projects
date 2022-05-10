const express = require('express');
const cassandra = require('cassandra-driver');
const cluster = new cassandra.Client({
    contactPoints: ["157.241.36.67", "157.241.26.176", "157.175.37.49"],
    localDataCenter: 'AWS_ME_SOUTH_1',
    credentials: {username: process.env.USER_NAME, password: process.env.USER_ASS},
    keyspace: process.env.KEY,
});
const router = express.Router();

//for testing
const items = [
    {id: "1", task: "buy good stuff", complated: false}
];

router.get('/',async (req,res) => {
    const result = await cluster.execute('SELECT * FROM items');
    res.json(result.rows);

    //for testing
    // res.json({
    //     items,
    // });
});

module.exports = router;