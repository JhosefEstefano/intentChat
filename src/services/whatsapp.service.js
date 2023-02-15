const axios = require("axios").default
require('dotenv').config()

async function SendMessageWh(data) {

    await axios({
        url:"https://graph.facebook.com/v15.0/113148464973818/messages",
        data:data,
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.WHATSAPP_TOKEN,
        },
    });
}

module.exports ={
    SendMessageWh
}