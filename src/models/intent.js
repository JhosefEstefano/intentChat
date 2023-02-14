const mongoose = require("mongoose");

const intentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slots: [{
        name: { type: String, required: true },
        question: { type: String, required: true },
        data_type: { type: String, enum: ['email', 'number', 'string', 'location'], default: 'number' },
        value: String
    }]
});

module.exports = mongoose.model("Intent", intentSchema);