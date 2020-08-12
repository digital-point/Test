const Product = require("../models/product.model");

module.exports = {
    async getAllProducts(req, res, next) {
        const allProducts = await Product.find({}).exec();
        res.json(allProducts);
    },
    async postNewProduct(req, res, next) {
        const { name, price, description } = req.body;
        const newData = { name, price, description };
        await Product.create(newData);
        res.json(newData);
    },
    async deleteProduct(req, res, next) {
        const returnRes = await Product.findByIdAndRemove(req.params.id);
        res.json(returnRes)
    }
}