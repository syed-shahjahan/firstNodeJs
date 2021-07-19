const ProductModel = require('../models/product')

// @desc    Gets All Products
// @route   Get /api/products
async function getProducts(req, res) {
    try {
        const products = await ProductModel.findAll();

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}

// @desc    Gets Product
// @route   Get /api/product/:pid
async function getProduct(req, res, pid) {
    try {
        const product = await ProductModel.findById(pid);

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json'})
            res.end(JSON.stringify({ message: 'Product not found' }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json'})
            res.end(JSON.stringify(product));
        }
    } catch (err) {
        console.error(err);
    }
}

async function createProduct(req, res, product) {
    try {
        var product = {
            "name": "Tripod Stand",
            "description": "Bluetooth Tripod Stand capable of holding mobile and GoPro camera.",
            "price": 250
        }

        const newProduct = await ProductModel.create(product);
        res.writeHead(201, { 'Content': 'application/json'});
        res.end(JSON.stringify(newProduct));
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
}