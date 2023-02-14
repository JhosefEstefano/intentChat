const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    session: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    total: { type: Number, required: false, default: 0 },
    open: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);