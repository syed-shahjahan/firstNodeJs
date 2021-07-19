const products = require('../data/products')
const { writeDataToFile } = require('../utils')
const { v4: uuidv4 } = require('uuid')

function findAll() {
    return new Promise((resolve, reject) => resolve(products))
}

function findById(pid) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === pid)
        resolve(product)
    })
}

function create(product) {
    product.id = uuidv4()
    return new Promise((resolve, reject) => {
        const newProduct = {id: uuidv4(), ...product} // Spread operator. Copies all the key value from product object into newProduct object.
        products.push(newProduct)
        writeDataToFile('./data/products.json', products)
        resolve(newProduct)
    })
}

module.exports = {
    findAll,
    findById,
    create
}