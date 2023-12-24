const { getProductService, createProductService } = require("../services/product.service")


// Get products
exports.getProducts=async(req,res,next)=>{
    try {
        const products= await getProductService()
        res.status(200).json({
            status:"Success",
            data:products
        })
        
    } catch (error) {
        res.status(400).json({
            status:"Field",
            message:"Can't get the data",
            error:error.message
        })
    }
}

// Post products
exports.createProduct=async (req, res, next) => {

    try {
        const result = await createProductService(req.body)

        res.status(200).json({
            status: 'Success',
            message: 'Data inserted successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not inserted',
            error: error.message
        })
    }
}

