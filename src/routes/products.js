const express = require("express");
const router = express.Router();

const productSchema = require("../models/products");

router.post('/product', (req, res) => {

    try {
        
        const product = productSchema(req.body);

        product.save()
        .then(result => {
            res.status(200).json({
                message: "Producto creada"
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


router.get('/products', async (req, res) => {
   
    try {

        const products = await productSchema.find();
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
    
});

router.get('/product/:id', async  (req, res) => {
  
    try {
        let id = req.params.id;

        const product = await productSchema.findById(id);

        if (!product) {
            res.status(404).json({
                message: `El producto con el id: ${id} no existe`
            })
            return;
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({
            error: error
        });
    }

    
});

module.exports = router