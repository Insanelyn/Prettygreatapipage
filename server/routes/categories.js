const express = require('express');
const router = express.Router();

const Category = require('../models/Category');
const Article = require('../models/Article');

router.get('/', function (req, res, next) {
    Category.find(function (err, categories) {
        if (err) return console.log(err);
        res.status(200).json(categories);
    });

});
router.get('/:category', function (req, res, next) {
    Category.findOne({title: req.params.category}, function (err, category) {
        if (err) return console.log(err);
        Article.find({category: category.title}, function(err, articles) {
            if(err) return console.log(err);
            res.status(200).json(articles);
        });
    });
});

module.exports = router;
