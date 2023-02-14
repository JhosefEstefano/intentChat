const express = require("express");
const router = express.Router();

const orderSchema = require("../models/order");
const productSchema = require("../models/products");


//create order
router.post('/order', async (req, res) => {
   

    try {
        
        const order = orderSchema(req.body);

        for (let i = 0; i < order.products.length; i++) {
            const prod = order.products[i];
            let objPrice =  await productSchema.findOne({ _id :prod}).select('price');            
            order.total =  order.total + objPrice.price;
        }
     
        order.save()
        .then(result => {
            res.status(200).json({
                message: "orden creada",
                obj: result
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

//get order
router.get('/orders', async (req, res) => {
   
    try {

        const orders = await orderSchema.find();
        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
    
});

//get order
router.get('/order/:id', async (req, res) => {
   
    try {
        let id = req.params.id;

        const orders = await orderSchema.findOne({ _id:id});

        if (!orders) {
            res.status(404).json({
                message: `La orden con el id: ${id} no existe`
            })
            return;
        }
        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
    
});

module.exports = router