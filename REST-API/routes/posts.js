const express = require('express')
const res = require('express/lib/response')
const router = express.Router();

const product = require("../model/product");

router.get('/', (req, res) => res.send('Hi am inside'));

router.post('/',async (req,res)=>{
    const products = new product({
        title: req.body.title,
        price: req.body.price,
        imgURL: req.body.imgURL,
        category: req.body.category
    });

    try{
const savedProduct= await products.save();
res.json(savedProduct);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;