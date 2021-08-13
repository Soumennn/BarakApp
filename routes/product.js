const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');


//showing all the products
router.get('/products', async (req, res) => {

    try{
        const products = await Product.find({});
    res.render('product/home.ejs', { products });
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Could not load the products! Something went wrong');
        res.redirect('/error');
    }
})

//getting the form for creating a new product:
router.get('/products/new', (req, res) => {

    try{
        res.render('product/new.ejs');
    }
    catch (e) {
        console.log(e.message);
        req.flash('error','Failed to load the creation form! Something went wrong');
        res.redirect('/error');

    }

})

//creating a new product 
router.post('/products', async (req, res) => {

   try  {
        await Product.create(req.body);
        req.flash('success','New product has been created successfully');
        res.redirect('/products');
   }
   catch (e) {
        console.log(e.message);
        req.flash('error','Product creation failed! Something went wrong');
        res.redirect('/error');
   }
})

// showing a particular product:
router.get('/products/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id).populate('reviews');
        console.log(products);
        res.render('product/show.ejs', { products });
    }
    catch (e) {
        console.log(e.message);
        req.flash('error','Failed to show a particular product! Something went wrong');
        res.redirect('/error');
    }
});

// getting the edit form:
router.get('/products/:id/edit', async (req, res) => {

    try {
        const products = await Product.findById(req.params.id);
        res.render('product/edit.ejs', { products });
    }
    catch (e) {
        console.log(e.message);
        req.flash('error','Failed to load the edit form! Something went wrong');
        res.redirect('/error');
    }

})
// making changes through patch request
router.patch('/products/:id', async (req, res) => {

    try {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        req.flash('success','Updated successfully');
        res.redirect(`/products/${req.params.id}`)
    }
    catch (e) {
        console.log(e.message);
        req.flash('error','Failed tomake changes! Something went wrong');
        res.redirect('/error');
    }


})

// deleting any particular product:
router.delete('/products/:id', async (req, res) => {

    try {      
        await Product.findByIdAndDelete(req.params.id);
        req.flash('success',' Product deleted successfully');
        res.redirect('/products');
    }
    catch (e) {
        console.log(e.message);
        req.flash('error','Failed delete product! Something went wrong');
        res.redirect('/error');
    }
})


//creating a new comment 
router.post('/products/:id/review', async(req,res) => {

    try {
        const product = await Product.findById(req.params.id);

    const review = new Review(
        {
        user:req.user.username,
        ...req.body
        }
    )
    console.log(review);
    product.reviews.push(review);

    await review.save();
    await product.save();

    // console.log(req.body);

    // res.send('commented!');
    req.flash('success','Comment posted successfully');
    res.redirect(`/products/${req.params.id}`);
    }
    catch (e) {

        console.log(e.message);
        req.flash('error','Failed to add comment! Something went wrong');
        res.redirect('/error');
    }

    
});


router.get('/error', (req,res) => {
    res.render('error.ejs');
})



// exporting the route function
module.exports = router;