const express = require("express");
const router = express.Router();

const orderSchema = require("../models/order");
const userSchema = require("../models/user");
const productSchema = require("../models/products");

const service = require("../services/whatsapp.service");
const modelWp = require("../shared/wp.model");

//create order
router.post('/order', async (req, res) => {
   

    try {
        
        const order = orderSchema(req.body);

        let prods =[];

        let user = await userSchema.findOne({ user_id: order.user_id});

        for (let i = 0; i < order.products.length; i++) {
            const prod = order.products[i];
            let objPrice =  await productSchema.findOne({ _id :prod});            
            order.total =  order.total + objPrice.price;


            let pr = await prods.find((x)=> x.name === objPrice.name);

            if(!pr){
                prods.push({
                    quantity: 1,
                    name: objPrice.name,
                })
                console.log('nuevo');
            }else{
                pr.quantity = pr.quantity + 1;
            }

        }

        console.log('prods',prods);

        var prsOrder = "";
        
        for (let i = 0; i < prods.length; i++) {
            const pr = prods[i];
            
            prsOrder = prsOrder.concat(`\n`, `*${pr.quantity} - ${pr.name}*`)

        }

        console.log('prsOrder', prsOrder);
     
        order.save()
        .then(result => {

    
            service.SendMessageWh(
                modelWp.MessageText(
                    `Perfecto ${user.name} tu pedido es:\n${prsOrder}\nCon un total de Q.${order.total}`,
                    order.user_id
                )
            );

            res.status(200).json({
                message: "orden creada",
                obj: result._id
            });

        })
        .catch(err => {
            console.log('err save',err)
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