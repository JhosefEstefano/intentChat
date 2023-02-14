const mongoose = require("mongoose");

const productSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    quantity: Number    
});

module.exports = mongoose.model("Product", productSchema);