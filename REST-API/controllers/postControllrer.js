const product = require("../model/product");
 
exports.postFunction = ()=>async (req,res)=>{
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
}

exports.getFunction = async(req, res) => {

    const products = await product.find()
    res.json(products)
    
}