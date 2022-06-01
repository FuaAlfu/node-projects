const Product = require('../models/product');

const getAllProductsStatics = async (req,res) => {
   // throw new Error('Not Found --> testing aysinc error'); //for test
   //res.status(200).json({msg:'Products testing route'});
   const search = 'a';
   const products = await Product.find({ //await
       name: {$regex:search, $options: 'i'},
   });
    res.status(200).json({products,nbHits: products.length});
}

const getAllProducts = async (req,res) => {
   // console.log('====================================');
   // console.log(req.query);
   // console.log('====================================');
  // res.status(200).json({msg:'Products route'});
  const {featured,company,name} = req.query
  const queryObject = {}

  if(featured){
      queryObject.featured = featured === 'true' ? true : false;
  }
  if(company){
      queryObject.company = company;
  }
  if(name){
    queryObject.name = name;
  }
  //const products = await Product.find(req.query);
  console.log(queryObject);
  const products = await Product.find(queryObject); //await
    res.status(200).json({products,nbHits: products.length});
}

module.exports = {
    getAllProducts,
    getAllProductsStatics,
}