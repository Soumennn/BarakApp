const mongoose = require('mongoose');
const Review = require('./review');


// schema creation:
const productSchema = new mongoose.Schema({
    
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        min: 1,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

// creating a model out of the above schema : 
const Product = mongoose.model('Product', productSchema);




// exporting the above created model :
module.exports = Product;

