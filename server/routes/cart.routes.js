const express = require('express');
const router = express.Router();
const {getAllCartProducts, postNewCartProduct} = require("../controllers/cart.controller");

const {asyncErrorHandler} = require("../middleware/index");

// get all <...>
router.get('/', asyncErrorHandler(getAllCartProducts));

// post new <...>
router.post('/send', asyncErrorHandler(postNewCartProduct));

module.exports = router;