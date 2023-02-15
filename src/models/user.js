const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    name_question:{
        type: Boolean,
        default: false
    },
    address: {
        type: String
    },
    address_question:{
        type: Boolean,
        default: false
    },
    user_id: {
        type: String,
        required: true
    },
    complete: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", userSchema);