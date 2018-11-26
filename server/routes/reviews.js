const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/', function (req, res, next) {
    Review.find(function (err, reviews) {
        if (err) return console.log(err);
        res.status(200).json(reviews);
    });
  })

router.post('/', function (req, res, next) {
  let review = new Review({
        _id: mongoose.Types.ObjectId(),
        id: req.body.id,
        author: req.body.author,
        text: req.body.text,
        rating: req.body.rating,
      })
      console.log("ehe",review)
      if(!req.body.author) {
        console.log("första")
        return res.status(400).send({
          success: 'false',
          message: 'Authorname is required'
        });
      } else if(!req.body.rating) {
        console.log("tredje")

        return res.status(400).send({
          success: 'false',
          message: 'Rating is required'
        });
      }else {
        console.log("save")
        review.save()
        .then(item => {
          console.log("hej", item)
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
