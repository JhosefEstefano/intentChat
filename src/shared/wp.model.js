// function MessageText(txtResponse, number) {

//     const data = JSON.stringify({
//         messaging_product: "whatsapp",
//         recipient_type: "individual",
//         to: number,
//         type: "text",
//         text: { preview_url: false, body: txtResponse }
//     });

//     return data;
// }

// function MessageButtons(number) {

//     const data = JSON.stringify({
//         messaging_product: "whatsapp",
//         recipient_type: "individual",
//         to: number,
//         type: "interactive",
//         interactive: {
//             type: "button",
//             body: {
//                 text: "Esto es lo que puedo hacer, dime como te puedo ayudar"
//             },
//             action: {
//                 buttons: [
//                     {
//                         type: "reply",
//                         reply: {
//                             id: "agencias",
//                             title: "Agencias disponibles"
//                         }
//                     },
//                     {
//                         type: "reply",
//                         reply: {
//                             id: "opciones",
//                             title: "Opciones de contacto"
//                         }
//                     }
//                 ]
//             }
//         },
//     });

//     return data;
// }

// function ListLocations(number) {

//     const data = JSON.stringify({
//         messaging_product: "whatsapp",
//         recipient_type: "individual",
//         to: number,
//         "type": "interactive",
//         "interactive": {
//             "type": "list",
//             "header": {
//                 "type": "text",
//                 "text": "Ubicaciones"
//             },
//             "body": {
//                 "text": "Estas son las ubicaciones disponibles en este momento"
//             },
//             "footer": {
//                 "text": "Recuerda que nuestro horario de atención es de 8:00 a 17:00"
//             },
//             "action": {
//                 "button": "Ver las Ubicaciones",
//                 "sections": [
//                     {
//                         "title": "Grupo #1",
//                         "rows": [
//                             {
//                                 "id": "naranjo",
//                                 "title": "El Naranjo",
//                             },
//                             {
//                                 "id": "outlet",
//                                 "title": "OUTLET",
//                             }
//                         ]
//                     }
//                 ]
//             }
//         }
//     });
//     return data;
// }


// function MessageLocation(lat, long, name, address, number) {

//     const data = JSON.stringify({
//         messaging_product: "whatsapp",
//         recipient_type: "individual",
//         to: number,
//         type: "location",
//         location: {
//             latitude: lat,
//             longitude: long,
//             name: name,
//             address: address
//         }

//     });

//     return data;
// }

function MessageText(message, number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "text",
        text: { preview_url: false, body: message }
    });

    return data;
}

function MessageTextWithUrl(message, number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        to: number,
        text: { preview_url: true, body: message }
    });

    return data;
}

function ImageText(url, number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "image",
        image: { link: url }
    });

    return data;
}


function MessageButtons(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "interactive",
        interactive: {
            type: "button",
            body: {
                text: "Escoge una de nuestras opciones:"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "contacto-site",
                            title: "Contacto Site"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "soporte",
                            title: "Soporte"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "info-fenix",
                            title: "Info Fénix 2.0"
                        }
                    }
                ]
            }
        },
    });

    return data;
}

function NumberCompanies(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "interactive",
        interactive: {
            type: "button",
            body: {
                text: "Escoge una de nuestras opciones:"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "uno-cinco",
                            title: "1 - 5"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "seis-diez",
                            title: "6 - 10"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "mas-diez",
                            title: "10+"
                        }
                    }
                ]
            }
        },
    });

    return data;
}

function HasTeam(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "interactive",
        interactive: {
            type: "button",
            body: {
                text: "Escoge una de nuestras opciones:"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "cuento",
                            title: "Si, propio"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "negativo-tengo",
                            title: "No propio"
                        }
                    }
                ]
            }
        },
    });

    return data;
}

function Finish(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "interactive",
        interactive: {
            type: "button",
            body: {
                text: "Escoge una de nuestras opciones:"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "enviar",
                            title: "Si, enviar"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "dont",
                            title: "No enviar"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "volver-al-inicio",
                            title: "Inicio"
                        }
                    }
                ]
            }
        },
    });

    return data;
}

function List(number) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Giros de negocio"
            },
            "body": {
                "text": "Selecciona tu Giro"
            },
            "action": {
                "button": "Ver los Giros",
                "sections": [
                    {
                        "title": "Giro",
                        "rows": [
                            {
                                "id": "industrial",
                                "title": "Industrial",
                            },
                            {
                                "id": "comercial",
                                "title": "Comercial",
                            },
                            {
                                "id": "de-servicio",
                                "title": "De servicio",
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}


module.exports = {
    ImageText, MessageText, List, MessageButtons, NumberCompanies, HasTeam, Finish, MessageTextWithUrl
}