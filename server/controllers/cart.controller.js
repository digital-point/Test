const Cart = require("../models/cart.model");

module.exports = {
    async getAllCartProducts(req, res, next) {
        const allProducts = await Cart.find({}).exec();
        res.json(allProducts);
    },
    async postNewCartProduct(req, res, next) {
        const product = req.body;
        const newData = { product };
        await Cart.create(newData);
        res.json(newData);
    },
}