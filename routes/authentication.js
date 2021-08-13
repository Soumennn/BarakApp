const express = require('express');
const router = express.Router();
const passport = require('passport');

const Product = require('../models/product');
const Review = require('../models/review');
const User = require('../models/user');
const { isLoggedIn } = require('../middlewares/loginMiddleware');



// for loading the registration form:
router.get('/register', (req, res) => {

    res.render('authentication/register.ejs');
})

//handling the post request of registration form
router.post('/register', async (req, res) => {

    try {
        const user = new User({ email: req.body.email, username: req.body.username });
        const newUserCheck = await User.register(user, req.body.password);
        req.flash('success', `Registered successfully. Welcome  ${req.body.username} `)
        res.redirect('/products');
    } 
    catch (e) {
        console.log(e.message);
        req.flash('error','Could not register! Something went wrong! Try again!');
        res.redirect('/register');
    }

})

// for loading the login form:
router.get('/login', (req, res) => {

    res.render('authentication/login.ejs');
})


router.post('/login', 
  passport.authenticate('local', 
  { 
      failureRedirect: '/login',
      failureFlash: true
  }
  ),
  (req, res) =>  {
      req.flash('success',`Welcome back ${req.body.username}`);
    res.redirect('/products');
  });





//logout the user from the current session
router.get('/logout', (req,res) => {
    req.logout();
    // req.flash('success','Logged out successfully !');
    res.redirect('/login');
});





module.exports = router;