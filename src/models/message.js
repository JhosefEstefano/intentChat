const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    user_id: String,
    message: String
});

module.exports = mongoose.model("Message", MessageSchema);