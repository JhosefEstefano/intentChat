const express = require("express");
const router = express.Router();

const intentSchema = require("../models/intent");

//create intent
router.post('/intent', (req, res) => {

    const intent = intentSchema(req.body);

    intent.save()
        .then(result => {
            res.status(200).json({
                message: "Intencion creada"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

// get all 
router.get('/intents', async (req, res) => {

    try {

        const intents = await intentSchema.find();
        res.status(200).json(intents);

    } catch (error) {
        res.status(500).json({
            error: error
        });
    }

});

//Get one intent
router.get('/intent/:id', async (req, res) => {

    try {
        let id = req.params.id;

        const intent = await intentSchema.findById(id);

        if (!intent) {
            res.status(404).json({
                message: `La intención con el id: ${id} no existe`
            })
            return;
        }
        res.status(200).json(intent);

    } catch (error) {
        res.status(500).json({
            error: error
        });
    }

});

module.exports = router 