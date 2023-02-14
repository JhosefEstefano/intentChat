const express = require("express");
const router = express.Router();

const { randomUUID } = require('crypto');

const conversacionSchema = require("../models/conversacion");
//create Conversacion
router.post('/talk', (req, res) => {

    try {

        const conversacion = conversacionSchema(req.body);
        conversacion.session = randomUUID();
        
        conversacion.save()
            .then(result => {
                res.status(200).json({
                    message: "conversacion creada"
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });


    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
});

router.get('/talks', async (req, res) => {

    try {

        const conversacions = await conversacionSchema.find();
        res.status(200).json(conversacions);

    } catch (error) {
        res.status(500).json({
            error: error
        });
    }

});

router.get('/talk/:id', async (req, res) => {

    try {
        let id = req.params.id;

        const conversacion = await conversacionSchema.findById(id);

        if (!conversacion) {
            res.status(404).json({
                message: `La conversacion con el id: ${id} no existe`
            })
            return;
        }
        res.status(200).json(conversacion);

    } catch (error) {
        res.status(500).json({
            error: error
        });
    }


});

module.exports = router
