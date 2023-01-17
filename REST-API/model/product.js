const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    imgURL:{
        type:String
    },
    category:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("product",productSchema);