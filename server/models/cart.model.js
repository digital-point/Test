const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    product: {
        name: {type: String, required: false},
        price: {type: Number, require: false}
    }
});

CartSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Cart', CartSchema);