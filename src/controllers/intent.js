const intentSchema = require("../models/intent");

async function getIntent(pId) {

    try {

        const intent = await intentSchema.findById(pId);

        if (!intent) {
            return null
        }

        return intent;

    } catch (error) {
        return error
    }

}

module.exports = {
    getIntent
}