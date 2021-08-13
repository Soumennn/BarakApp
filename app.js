if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}



const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const localStrategy = require('passport-local');


// ------------------------------------------------------------------

const productRoutes = require('./routes/product');
const authenticationRoutes = require('./routes/authentication');
const cartRoutes = require('./routes/cart')
const User = require('./models/user');




// -----------------------------------------------------------------

//template engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//serving static files
app.use(express.static(path.join(__dirname, 'public')))
// parsing body
app.use(express.urlencoded({extended: true}));
// for patch and delete requests :
app.use(methodOverride('_method'))


//middlware for session: 
const sessionConfig = {
    secret: 'keyboardcatisnotaverygoodsecret',
    resave: false,
    saveUninitialized: true,
}
app.use(session(sessionConfig));

//middleware for flash:
app.use(flash());

//middleware for passport:
app.use(passport.initialize());
app.use(passport.session());
//integrating the local strategy into passport:
passport.use(new localStrategy(User.authenticate()));
// for entry and exit of users at the beginning and ending of sessions:
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware for making functionalities locally available:
app.use((req,res,next) => {

    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
})

// --------------------------------------------------------------

const seedDB = require('./seed');




//---------------------------------------------------------------




// connecting to the database
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
})
.then(()=> {
    console.log("database connected");
}).catch( (err) => {
    console.log('error occured in database connectivity!');
    console.log(err);
})


// --------------------------------------------------------------------------------------------


// storing / inserting the elements of productArray into database for R & D: 
// seedDB();




// ---------------------------------------------------------------------------------------------


app.get('/', (req,res) => {
    res.send('<h1> Welcome to the landing page </h1>');
})



app.use(productRoutes);
app.use(authenticationRoutes);
app.use(cartRoutes);


app.listen(process.env.PORT || 3000, ()=> {
    console.log("App started sucessfully at port 3000");
});