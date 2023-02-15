const modelWp = require("./wp.model");
const service = require("../services/whatsapp.service");
const userSchema = require("../models/user");
const { model } = require("mongoose");

async function processMessage(message, number) {
  message = message.toLowerCase();
  let models = [];

  console.clear();

  let user;
  user = await userSchema.findOne({ user_id: number });
  console.log("usuario", user);

  if (!user) {
    user = new userSchema({
      user_id: number,
      name_question : true
    });

    user.save();

    models.push(
      modelWp.MessageText(
        "Hola 😁, bienvenido a delivery de Site, S. A. 🖐",
        number
      )
    );

    models.push(
      modelWp.MessageText(
        "Miro que eres nuevo aqui, podrias darme tu nombre y apellido en una sola linea?",
        number
      )
    );

  }else{

    if (user.complete === false) {

      if(user.name_question == true && user.name == null){

        models.push(
          modelWp.MessageText(
            "podrias darme tu direccion en una sola linea?",
            number
          )
        );
       await userSchema.findOneAndUpdate({ user_id: number },{name: message, address_question: true});
      }

      if(user.name_question == true && user.name != null && user.address_question == true && user.address == null){

        models.push(
          modelWp.MessageText(
            `Muy bien *${user.name}* te visitaremos en ${message}`,
            number
          )
        );

        let url_n = new URL(
          `http://localhost:4200/home/menu/${1234}/${user.user_id}`
        );
        models.push(modelWp.MessageText(`Por favor has tu pedido por el siguiente link`, number));

        models.push(
          modelWp.MessageTextWithUrl(
            `${url_n}`,
            number
          )
        );

        await userSchema.findOneAndUpdate({ user_id: number },{address: message, complete: true});
      }
      
    } else {
      models.push(
        modelWp.MessageTextWithUrl(
          `Hola *${user.name}* cuando hagas tu pedido te visitaremos en ${user.address}`,
          number
        )
      );
  
      let url_n = new URL(
        `http://localhost:4200/home/menu/${1234}/${user.user_id}`
      );
      models.push(modelWp.MessageTextWithUrl(`${url_n}`, number));
    }

  }

  for (let i = 0; i < models.length; i++) {
    const mod = models[i];
    service.SendMessageWh(mod);
  }
}

module.exports = {
  processMessage,
};
