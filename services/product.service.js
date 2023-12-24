const Product = require('../models/Product')

// Get product service
exports.getProductService = async () => {
    const products = await Product.find({})
    return products;
}
// Post product service
exports.createProductService = async (data) => {
    const product = await Product.create(data)
    return product;
}

