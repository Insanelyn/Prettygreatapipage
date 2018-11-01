const express = require('express');
const router = express.Router();
const faker = require('faker');
const Article = require('../../models/Article');
const Category = require('../../models/Category');

router.get('/', function (req, res, next) {
    const categories = ["Home", "Spirits", "Accesories"];
    for (let i = 0; i < 60; i++) {
        let article = new Article({
            product_name : faker.name.firstName(),
            color : faker.commerce.color(),
            price : faker.commerce.price(),
            category: categories[Math.floor(Math.random() * categories.length)],
            long_description : faker.lorem.paragraph(),
            image: "https://source.unsplash.com/collection/190727/1600x900"
        })

        article.save();
    }
    for (let i = 0; i < categories.length; i++) {
        let cat = new Category({
            title: categories[i]
        });
        cat.save();
    }
    res.redirect('/')
});


module.exports = router;
