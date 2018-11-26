const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/reviews', function (req, res, next) {
    Review.find(function (err, reviews) {
        if (err) return console.log(err);
        res.status(200).json(reviews);
    });
  })

router.post('/reviews', function (req, res, next) {
  let review = new Review({
        _id: mongoose.Types.ObjectId(),
        author: req.body.author,
        text: req.body.text,
        rating: req.body.rating
      })
      if(!req.body.author) {
        return res.status(400).send({
          success: 'false',
          message: 'Authorname is required'
        });
      } else if(!req.body.text) {
        return res.status(400).send({
          success: 'false',
          message: 'Text is required'
        });
      } else if(!req.body.rating) {
        return res.status(400).send({
          success: 'false',
          message: 'Rating is required'
        });
      }else {
        review.save()
        .then(item => {
          res.send({
            success: 'true',
            message: 'Review added successfully',
            review
          });
        })
        .catch(err => {
          res.status(400).send("unable to save to database");
        });
      }

})
module.exports = router;
