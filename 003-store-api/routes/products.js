const express = require('express');
const router = express.Router();

const {getAllProducts,getAllProductsStatics} = require('../controller/controller');

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatics);

module.exports = router;