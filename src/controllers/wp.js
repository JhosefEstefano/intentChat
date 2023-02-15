const processMessage = require("../shared/processMessage")

require('dotenv').config()

const verifyToken = (req, res) => {

    try {

        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        if (mode && token) {
            if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
                console.log("WEBHOOK_VERIFIED");
                res.status(200).send(challenge);
            } else {
                res.sendStatus(403);
            }
        }

    } catch (e) {
        res.status(400).send();
    }
}


const recivedMessage = (req, res) => {

    try {
        // let body = req.body;
        // let messageOrginal = GetTextUser(req.body.entry[0].changes[0].value.messages[0]);
        // let type = req.body.entry[0].changes[0].value.messages[0].type;

        // if (type == 'interactive') {

        //     processMessage.processMessage(messageOrginal, req.body.entry[0].changes[0].value.messages[0].from);
        // }

        // info on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
        if (req.body.object) {
            if (
                req.body.entry &&
                req.body.entry[0].changes &&
                req.body.entry[0].changes[0] &&
                req.body.entry[0].changes[0].value.messages &&
                req.body.entry[0].changes[0].value.messages[0]
            ) {


                let phone_number_id = req.body.entry[0].changes[0].value.metadata.phone_number_id;
                let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
                let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body;
                let msg_reply = req.body.entry[0].changes[0].value.messages[0]; // extract the message text from the webhook payload

                if (msg_body != "" || msg_body != undefined) {
                    processMessage.processMessage(msg_body, from);
                }
            }

            res.sendStatus(200);
        } else {
            // Return a '404 Not Found' if event is not from a WhatsApp API

            res.sendStatus(404);
        }


    } catch (e) {
        res.send("EVENT_RECEIVED")
    }
}


function GetType(message) {

    return typeMeesage = message["type"];

}

function GetTextUser(message) {

    let tex = "";
    let typeMeesage = message["type"];

    switch (typeMeesage) {

        case "text":
            tex = (message["text"])["body"]
            break;

        case "interactive":

            let interactiveObject = message["interactive"];
            let typeInteractive = interactiveObject["type"];

            myConsoloe.log(typeInteractive);

            if (typeInteractive === "button_reply") {
                tex = (interactiveObject["button_reply"])["id"];
            } else {
                tex = (interactiveObject["list_reply"])["id"];
            }
            break;
    }
    console.log(tex);
    return tex;
}

module.exports = {
    verifyToken,
    recivedMessage
} 