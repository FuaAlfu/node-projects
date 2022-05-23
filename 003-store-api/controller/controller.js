const getAllProductsStatics = (req,res) => {
    throw new Error('Not Found --> testing aysinc error');
    res.status(200).json({msg:'Products testing route'});
}

const getAllProducts = (req,res) => {
    res.status(200).json({msg:'Products route'});
}

module.exports = {
    getAllProducts,
    getAllProductsStatics,
}