const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/loginMiddleware');
const Product = require('../models/product');
const User = require('../models/user');
const { route } = require('./product');

// -----------------------------------------------------------------------

router.get('/user/:userId/cart', async (req, res) => {

    try {
        const user = await User.findById(req.params.userId).populate('cart');
        console.log(user);
        res.render('cart/showCart.ejs', { user });
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Unable to load cart section');
        res.redirect('/error');
    }
});

router.post('/user/:id/cart', isLoggedIn, async (req, res) => {

    try {
        const product = await Product.findById(req.params.id);
        const user = req.user;
        // console.log(product);
        user.cart.push(product);

        await user.save();

        req.flash('success', 'Added to cart successfully');
        res.redirect(`/user/${req.user._id}/cart`);
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Could not add the product to cart');
        res.render('error.ejs');
    }
});




router.delete('/user/:userid/cart/:id', async(req, res) => {

        const { userid, id } = req.params;
        await User.findByIdAndUpdate(userid,{$pull:{cart:id}})
        res.redirect(`/user/${req.user._id}/cart`);
});





module.exports = router;