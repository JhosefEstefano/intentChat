const mongoose = require("mongoose");

const conversacionSchema = new  mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    session: {
        type: String,
        required: true
    },
    intent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Intent'
    },
    open: {
        type: Boolean,
        default: true
    }
    
},{ timestamps: true });

module.exports = mongoose.model("Conversacion", conversacionSchema);