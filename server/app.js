const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const index = require('./routes/index');
const articles = require('./routes/articles');
const seeder = require('./datalayer/seeder/articles');
const categories = require('./routes/categories');
const stripe = require("stripe")('PRIVT_KEY');
const database = require("./datalayer/mongo.js")
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/articles', articles);
app.use('/categories', categories);
app.use('/seeder', seeder);

app.post("/charge", (req, res, next) => {
  let amount = req.body.total*100;

  stripe.customers.create({
    email: req.body.stripeToken.email,
    source: req.body.stripeToken.id
  })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Ecommerce Shopping Cart",
        currency: "usd",
        customer: customer.id
      }))
    .then(charge => res.json(req.body.stripeToken));
});
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
