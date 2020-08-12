const express = require('express');
const router = express.Router();
const {getAllProducts, postNewProduct, deleteProduct} = require("../controllers/products.controller");

const {asyncErrorHandler} = require("../middleware/index");

// get all <...>
router.get('/', asyncErrorHandler(getAllProducts));

// post new <...>
router.post('/add', asyncErrorHandler(postNewProduct));

// put (edit) <...>
// router.put('/:id/edit', asyncErrorHandler(putEditProduct));

// delete <...>
router.delete('/:id/delete', asyncErrorHandler(deleteProduct));

module.exports = router;