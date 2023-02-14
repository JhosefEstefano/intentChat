const mongoose = require("mongoose");

const responseSchema = new  mongoose.Schema({
    question: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Response", responseSchema);