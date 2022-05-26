const Product = require('../models/product');

const getAllProductsStatics = (req,res) => {
   // throw new Error('Not Found --> testing aysinc error'); //for test
   //res.status(200).json({msg:'Products testing route'});
   const products = await Product.find({
       name: 'vase table',
   });
    res.status(200).json({products,nbHits: products.length});
}

const getAllProducts = (req,res) => {
   // console.log('====================================');
   // console.log(req.query);
   // console.log('====================================');
  // res.status(200).json({msg:'Products route'});
   const products = await Product.find(req.query);
    res.status(200).json({products,nbHits: products.length});
}

module.exports = {
    getAllProducts,
    getAllProductsStatics,
}